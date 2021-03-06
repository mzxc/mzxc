package com.cevr.component.util;

import javax.mail.Address;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.SendFailedException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.util.StringUtils;

/**
 * 
 * 发送邮件工具类
 * 
 * @author 郝洋
 * @version [版本号, 2016-8-26]
 * @see [相关类/方法]
 * @since [产品/模块版本]
 */
public class MailUtil {
    private static Log mLogger = LogFactory.getFactory().getInstance(MailUtil.class);
    
    /**
     * 
     * This method is used to send a Message with a pre-defined mime-type.
     * 
     * @param session -mail session
     * @param from
     * @param to
     * @param cc
     * @param bcc
     * @param subject
     * @param content
     * @param mimeType
     * @throws MessagingException
     */
    public static void sendMessage(final Session session, final String from, final String[] to, final String[] cc, final String[] bcc, final String subject, final String content, final String mimeType)
        throws MessagingException {
        final Message message = new MimeMessage(session);
        
        // n.b. any default from address is expected to be determined by caller.
        if (!StringUtils.isEmpty(from)) {
            final InternetAddress sentFrom = new InternetAddress(from);
            message.setFrom(sentFrom);
            if (mLogger.isDebugEnabled())
                mLogger.debug("e-mail from: " + sentFrom);
        }
        
        if (to != null) {
            final InternetAddress[] sendTo = new InternetAddress[to.length];
            
            for (int i = 0; i < to.length; i++) {
                sendTo[i] = new InternetAddress(to[i]);
                if (mLogger.isDebugEnabled())
                    mLogger.debug("sending e-mail to: " + to[i]);
            }
            message.setRecipients(Message.RecipientType.TO, sendTo);
        }
        
        if (cc != null) {
            final InternetAddress[] copyTo = new InternetAddress[cc.length];
            
            for (int i = 0; i < cc.length; i++) {
                copyTo[i] = new InternetAddress(cc[i]);
                if (mLogger.isDebugEnabled())
                    mLogger.debug("copying e-mail to: " + cc[i]);
            }
            message.setRecipients(Message.RecipientType.CC, copyTo);
        }
        
        if (bcc != null) {
            final InternetAddress[] copyTo = new InternetAddress[bcc.length];
            
            for (int i = 0; i < bcc.length; i++) {
                copyTo[i] = new InternetAddress(bcc[i]);
                if (mLogger.isDebugEnabled())
                    mLogger.debug("blind copying e-mail to: " + bcc[i]);
            }
            message.setRecipients(Message.RecipientType.BCC, copyTo);
        }
        message.setSubject((subject == null) ? "(no subject)" : subject);
        message.setContent(content, mimeType);
        message.setSentDate(new java.util.Date());
        
        // First collect all the addresses together.
        Address[] remainingAddresses = message.getAllRecipients();
        int nAddresses = remainingAddresses.length;
        boolean bFailedToSome = false;
        
        final SendFailedException sendex = new SendFailedException("Unable to send message to some recipients");
        
        // Try to send while there remain some potentially good addresses
        do {
            // Avoid a loop if we are stuck
            nAddresses = remainingAddresses.length;
            try {
                // Send to the list of remaining addresses, ignoring the
                // addresses attached to the message
                Transport.send(message, remainingAddresses);
            }
            catch (final SendFailedException ex) {
                bFailedToSome = true;
                sendex.setNextException(ex);
                // Extract the remaining potentially good addresses
                remainingAddresses = ex.getValidUnsentAddresses();
            }
        } while (remainingAddresses != null && remainingAddresses.length > 0 && remainingAddresses.length != nAddresses);
        
        if (bFailedToSome)
            throw sendex;
    }
    
    /**
     * This method is used to send a Text Message.
     * 
     * @param session
     * @param from
     * @param to
     * @param cc
     * @param bcc
     * @param subject
     * @param content
     * @throws MessagingException
     */
    public static void sendTextMessage(final Session session, final String from, final String[] to, final String[] cc, final String[] bcc, final String subject, final String content)
        throws MessagingException {
        sendMessage(session, from, to, cc, bcc, subject, content, "text/plain; charset=utf-8");
    }
    
    /**
     * This method overrides the sendTextMessage to specify one receiver and mulitple cc recipients.
     * 
     * @param session
     * @param from
     * @param to
     * @param cc
     * @param bcc
     * @param subject
     * @param content
     * @throws MessagingException
     */
    public static void sendTextMessage(final Session session, final String from, final String to, final String[] cc, final String[] bcc, final String subject, final String content)
        throws MessagingException {
        String[] recipient = null;
        if (to != null)
            recipient = new String[] {to};
        
        sendMessage(session, from, recipient, cc, bcc, subject, content, "text/plain; charset=utf-8");
    }
    
    /**
     * This method overrides the sendTextMessage to specify only one receiver and cc recipients, rather than an array of
     * recipients.
     * 
     * @param from e-mail address of sender
     * @param to e-mail address of recipient
     * @param cc e-mail address of cc recipient
     * @param subject subject of e-mail
     * @param content the body of the e-mail
     * @throws MessagingException the exception to indicate failure
     */
    public static void sendTextMessage(final Session session, final String from, final String to, final String cc, final String bcc, final String subject, final String content)
        throws MessagingException {
        String[] recipient = null;
        String[] copy = null;
        String[] bcopy = null;
        
        if (to != null)
            recipient = new String[] {to};
        if (cc != null)
            copy = new String[] {cc};
        if (bcc != null)
            bcopy = new String[] {bcc};
        
        sendMessage(session, from, recipient, copy, bcopy, subject, content, "text/plain; charset=utf-8");
    }
    
    /**
     * This method is used to send a HTML Message
     * 
     * @param from e-mail address of sender
     * @param to e-mail address(es) of recipients
     * @param subject subject of e-mail
     * @param content the body of the e-mail
     * @throws MessagingException the exception to indicate failure
     */
    public static void sendHTMLMessage(final Session session, final String from, final String[] to, final String[] cc, final String[] bcc, final String subject, final String content)
        throws MessagingException {
        sendMessage(session, from, to, cc, bcc, subject, content, "text/html; charset=utf-8");
    }
    
    /**
     * This method overrides the sendHTMLMessage to specify only one sender, rather than an array of senders.
     * 
     * @param from e-mail address of sender
     * @param to e-mail address of recipients
     * @param subject subject of e-mail
     * @param content the body of the e-mail
     * @throws MessagingException the exception to indicate failure
     */
    public static void sendHTMLMessage(final Session session, final String from, final String to, final String cc, final String bcc, final String subject, final String content)
        throws MessagingException {
        String[] recipient = null;
        String[] copy = null;
        String[] bcopy = null;
        
        if (to != null)
            recipient = new String[] {to};
        if (cc != null)
            copy = new String[] {cc};
        if (bcc != null)
            bcopy = new String[] {bcc};
        
        sendMessage(session, from, recipient, copy, bcopy, subject, content, "text/html; charset=utf-8");
    }
    
    /**
     * This method overrides the sendHTMLMessage to specify one receiver and mulitple cc recipients.
     * 
     * @param from e-mail address of sender
     * @param to e-mail address of recipient
     * @param cc e-mail addresses of recipients
     * @param subject subject of e-mail
     * @param content the body of the e-mail
     * @throws MessagingException the exception to indicate failure
     */
    public static void sendHTMLMessage(final Session session, final String from, final String to, final String[] cc, final String[] bcc, final String subject, final String content)
        throws MessagingException {
        String[] recipient = null;
        if (to != null)
            recipient = new String[] {to};
        
        sendMessage(session, from, recipient, cc, bcc, subject, content, "text/html; charset=utf-8");
    }
    
    /**
     * This method overrides the sendHTMLMessage to specify one receiver and mulitple cc recipients.
     * 
     * @param from e-mail address of sender
     * @param to e-mail address of recipient
     * @param cc e-mail addresses of recipients
     * @param subject subject of e-mail
     * @param content the body of the e-mail
     * @throws MessagingException the exception to indicate failure
     */
    public static void sendHTMLMessage(final Session session, final String from, final String to, final String subject, final String content)
        throws MessagingException {
        String[] recipient = null;
        if (to != null)
            recipient = new String[] {to};
        
        sendMessage(session, from, recipient, null, null, subject, content, "text/html; charset=utf-8");
    }
}
