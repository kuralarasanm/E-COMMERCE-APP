package org.jsp.lombo_demo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Employee {
	private int id;
	private String name;
	private String desg;
	private long phone;
	private String email;
	private String password;
}
