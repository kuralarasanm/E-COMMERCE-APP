package org.jsp.mailsendingapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.HttpServletRequest;

//@RestController
//public class MailSendingController {
//	@Autowired
//	private JavaMailSender javaMailSender;
//
//	@PostMapping("/sendmail")
//	public String sendEmail(@RequestParam String email_Id) {
//		MimeMessage message=javaMailSender.createMimeMessage();
//		MimeMessageHelper helper=new MimeMessageHelper(message);
//		try {
//			helper.setSubject("testing mail sending api");
//			helper.setText("creating this api to test our mail");
//			helper.setTo(email_Id);
//			javaMailSender.send(message);
//			return "mail send successful";
//		} catch (MessagingException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//			return "mail not send";
//		}
//	}
//}

@CrossOrigin
@RestController
public class MailSendingController {
	@Autowired
	private JavaMailSender javaMailSender;
	@Value(value="kural")
	private String token;
	@PostMapping("/send-mail")
	public String sendemail(@RequestParam String email,HttpServletRequest request) {
		String siteUrl=request.getRequestURL().toString();
		String url=siteUrl.replace(request.getServletPath(), "/verify")+"?token="+token;
		MimeMessage message=javaMailSender.createMimeMessage();
		MimeMessageHelper helper=new MimeMessageHelper(message);
		try {
			helper.setTo(email);
			helper.setSubject("account verification");
			helper.setText(url);
			javaMailSender.send(message);
			return "mail has been sent";
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "mail not sent";
		}
		
	}
	@GetMapping("/verify")
	public String verify(@RequestParam String token) {
		if(this.token.equals(token))
			return " verification successful";
		else
			return "verify not successful";
	}
	
}













