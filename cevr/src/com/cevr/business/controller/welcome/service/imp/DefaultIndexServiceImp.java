/*
 * 文 件 名:  DefaultRegisterService.java
 * 版    权:  gomyck
 * 描    述:  <描述>
 * 修 改 人:  郝洋
 * 修改时间:  2016-8-25
 * 跟踪单号:  <跟踪单号>
 * 修改单号:  <修改单号>
 * 修改内容:  <修改内容>
 */
package com.cevr.business.controller.welcome.service.imp;

import java.math.BigInteger;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hibernate.criterion.CriteriaSpecification;
import org.springframework.stereotype.Service;

import com.cevr.business.controller.common.message.ResultMessage;
import com.cevr.business.controller.welcome.service.IIndexService;
import com.cevr.business.model.entity.BizCar1001;
import com.cevr.business.model.entity.BizCarGroup1002;
import com.cevr.business.model.entity.BizCarVideo1004;
import com.cevr.business.model.entity.BizTicket2001;
import com.cevr.business.model.entity.BizTicketPeople2002;
import com.cevr.business.model.entity.BizTicketType2003;
import com.cevr.business.model.to.TicketInfo;
import com.cevr.component.core.dao.BaseDao;
import com.cevr.component.core.xml.context.CkXmlGetter;
import com.cevr.component.core.xml.invoke.CkSQLBuilder;
import com.cevr.component.logger.NestLogger;
import com.cevr.component.util.DateUtil;
import com.cevr.component.util.IdUtil;

/**
 * 注册ser
 * 
 * @author 郝洋
 * @version [版本号, 2016-8-25]
 * @see #saveObj
 * @since 1.0
 */
@Service(value = "DefaultIndexServiceImp")
public class DefaultIndexServiceImp extends BaseDao implements IIndexService {
    
    @SuppressWarnings("unchecked")
    @Override
    public List<Map<String, Object>> searchCarInfo(TicketInfo ti) {
        // TODO 查询车辆信息
        String sql = CkSQLBuilder.initSql(CkXmlGetter.getXmlNodes("sql", "serachAll_car"), ti);
        return this.createSqlQuery(sql).setResultTransformer(CriteriaSpecification.ALIAS_TO_ENTITY_MAP).list();
        // return this.findAll(BizCar.class);
    }
    
    @SuppressWarnings("unchecked")
    @Override
    public ResultMessage addTicketInfo(TicketInfo ti) {
        // TODO 新增投票信息,先判断是否投过
        try {
            BizCar1001 bc = (BizCar1001)this.findByPrimaryKey(BizCar1001.class, ti.getCarId());
            ti.setGroupId(bc.getGroupId());
            String sql = CkSQLBuilder.initSql(CkXmlGetter.getXmlNodes("sql", "findTicketInfo"), ti);
            BigInteger num = (BigInteger)this.createSqlQuery(sql).uniqueResult();
            if (num != null && num.intValue() > 0) {
                return ResultMessage.initMsg(false, "3000", "本组别投票权已用完");
            }
        }
        catch (Exception e) {
            NestLogger.showException(e);
            return ResultMessage.initMsg(false, "3000", "本组别投票权已用完");
        }
        Map<String, Object> param = this.initParams();
        // param.put("userName", ti.getUserName());//去掉用户名称
        param.put("userTel", ti.getUserTel());
        List<BizTicketPeople2002> btps = (List<BizTicketPeople2002>)this.findByProperties(BizTicketPeople2002.class, param);
        BizTicketPeople2002 btp = null;
        if (btps == null || btps.size() < 1) {
            btp = new BizTicketPeople2002(IdUtil.getUUID(), ti.getUserName(), ti.getUserTel(), "0", ti.getUserEmail(), "0", "0", "0", ti.getTicketTime(), ti.getTicketTime(), "0000");
            try {
                this.save(btp);
            }
            catch (Exception e) {
                NestLogger.showException(e);
                return ResultMessage.initMsg(false, "5001", "新增投票人信息失败");
            }
        }
        else {
            btp = btps.get(0);
        }
        BizCar1001 bz = (BizCar1001)this.findByPrimaryKey(BizCar1001.class, ti.getCarId());
        if (bz == null) {
            return ResultMessage.initMsg(false, "4001", "违法的车辆id");
        }
        BizTicketType2003 btt = (BizTicketType2003)this.findByPrimaryKey(BizTicketType2003.class, ti.getTicketTypeId());
        if (btt == null) {
            return ResultMessage.initMsg(false, "4002", "违法的活动id");
        }
        BizTicket2001 bt = new BizTicket2001(IdUtil.getUUID(), ti.getFromIp(), ti.getTicketTime(), ti.getTicketNum(), ti.getTicketTypeId(), btp.getId(), ti.getCarId(), "0", "0", "0", ti.getTicketTime(), ti.getTicketTime(), "0000");
        try {
            this.save(bt);
        }
        catch (Exception e) {
            NestLogger.showException(e);
            return ResultMessage.initMsg(false, "5002", "新增投票信息失败");
        }
        return ResultMessage.initMsg(true, "2000", "投票成功");
    }
    
    @Override
    public ResultMessage delTicketInfo(TicketInfo ti) {
        // TODO 取消投票
        try {
            Map<String, Object> param = this.initParams();
            Map<String, Object> ticketTime = new HashMap<String, Object>();
            ticketTime.put(SYMBOL, ">");
            ticketTime.put(VALUE, DateUtil.getDate(DateUtil.nowStr("yyyy-MM-dd"), "yyyy-MM-dd"));
            param.put("fromIp", ti.getFromIp());
            param.put("clickTime", ticketTime);
            param.put("cancleflag", "0");
            param.put("clickCarId", ti.getCarId());
            param.put("ticketTypeId", ti.getTicketTypeId());
            BizTicket2001 bt = (BizTicket2001)this.findByProperties(BizTicket2001.class, param).get(0);
            bt.setCancleflag("1");
            bt.setUpdatetime(new Date());
            bt.setOperatorId("0000");
            this.update(bt);
            return ResultMessage.initMsg(true, "2000", "取消成功");
        }
        catch (Exception e) {
            return ResultMessage.initMsg(false, "5000", "不可取消");
        }
    }
    
    @Override
    public BizCarVideo1004 findVideoByCarId(TicketInfo ti) {
        // TODO 查询车辆信息
        Map<String, Object> param = this.initParams();
        param.put("carId", ti.getCarId());
        BizCarVideo1004 bt = (BizCarVideo1004)this.findByProperties(BizCarVideo1004.class, param).get(0);
        
        return bt;
    }
}
