package org.jsp.Ecommerenceapp.service;

import static org.jsp.Ecommerenceapp.util.ApplicationConstants.VERIFY_LINK;
import static org.jsp.Ecommerenceapp.util.ApplicationConstants.VERIFY_LINK_USER;

import org.jsp.Ecommerenceapp.model.Merchant;
import org.jsp.Ecommerenceapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.HttpServletRequest;;

@Service
public class ECommerceAppEmailService {
	@Autowired
	private JavaMailSender javaMailSender;

	public String sendWelcomeMail(Merchant merchant, HttpServletRequest request) {
		String siteUrl = request.getRequestURL().toString();
		String url = siteUrl.replace(request.getServletPath(), "");
		String actual_Url = url + VERIFY_LINK + merchant.getToken();
		MimeMessage message = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);
		try {
			helper.setTo(merchant.getEmail());
			helper.setSubject("Activate your Account");
			helper.setText(actual_Url);
			javaMailSender.send(message);
			return "verification mail has been sent";
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "verification mail not sent";
		}
	}

	public String sendWelcomeMail(User user, HttpServletRequest request) {
		String siteUrl = request.getRequestURL().toString();
		String url = siteUrl.replace(request.getServletPath(), "");
		String actual_Url = url + VERIFY_LINK_USER + user.getToken();
		MimeMessage message = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);
		try {
			helper.setTo(user.getEmail());
			helper.setSubject("Activate your Account");
			helper.setText(actual_Url);
			javaMailSender.send(message);
			return "verification mail has been sent";
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "verification mail not sent";
		}

	}

}
