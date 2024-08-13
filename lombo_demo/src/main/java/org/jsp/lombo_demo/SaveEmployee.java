package org.jsp.lombo_demo;

public class SaveEmployee {
	public static void main(String[] args) {
		Employee e=new Employee(1,"abc","developer",12345,"asdfg","1234ertg");
		System.out.println(e);
		
		Employee e1=new Employee();
		e1.setId(5);
		System.out.println(e1);
		
		Employee e2=Employee.builder().desg("trainer").email("asdfg").id(1).name("sdfghj").password("qwsd").build();
		System.out.println(e2);
	}
	
}
