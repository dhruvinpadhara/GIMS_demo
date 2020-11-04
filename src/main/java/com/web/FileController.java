package com.web;

import java.io.File;
import java.io.IOException;
import java.security.Principal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.model.Account.Account_detail_model;
import com.model.Account.Account_model;
import com.model.Account.Expense_model;
import com.model.Account.Group_model;
import com.model.Acm.Assi_priv_to_role;
import com.model.Acm.Assi_priv_user;
import com.model.Acm.Company_model;
import com.model.Acm.Employee_model;
import com.model.Acm.Log_model;
import com.model.Acm.Privilege_comp_comp_model;
import com.model.Acm.Privilege_model;
import com.model.Acm.Privillege_component_model;
import com.model.Acm.Role_model;
import com.model.Location.Area_model;
import com.model.Location.City_model;
import com.model.Location.State_model;
import com.model.dao.GenericDao;
import com.model.material.Item_group_model;
import com.model.material.Material_details_model;
import com.model.material.Material_model;
import com.model.material.Type_work_model;
import com.model.material.Unit_model;

@Controller
public class FileController {
	
//	@RequestMapping(value="index.db",method=RequestMethod.GET)
/*	public String hello(){
		return "hello";
	}
*/	
	//welcome page
	@RequestMapping(value="index.db",method=RequestMethod.GET)
	public String hello(HttpSession ses,Principal p){
		System.out.println("username:"+p.getName());
		Employee_model lm = (Employee_model) dao.display("Employee_model", "username='" + p.getName() + "'").get(0);
		ses.setAttribute("empid", lm.getEmp_id());
		ses.setAttribute("useremail", lm.getUsername());
		ses.setAttribute("uimage", lm.getImage());

		return "hello";
	}
		
		//dashboard
		@RequestMapping(value="home.db",method=RequestMethod.GET)
		public String home(){
			return "home";
		}
		
		@Autowired
		GenericDao dao;
		
		//view
		@RequestMapping(value="get_data.db", method=RequestMethod.GET , headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String ,List>  get_data(@RequestParam("model") String E) {

			HashMap<String, List> map = new HashMap<String, List>();
			List l=dao.display(E);	
			map.put("data", l);
			return map;
		}
		
		//data from particular date
		@RequestMapping(value="get_date_data.db", method=RequestMethod.POST , headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String ,List>  get_data(@RequestParam("model") String model,@RequestParam("fname")String fname,@RequestParam("value") String date) {

			HashMap<String, List> map = new HashMap<String, List>();
			System.out.println(model+" field:"+fname+ " value: "+date);
			SimpleDateFormat sd1=new SimpleDateFormat("yyyy-MM-dd"); 
			
			
			Date date1 = null;
			try {
				date1=sd1.parse(date);
				System.out.println(date1);
//				System.out.println("date is :"+sd1.format(date));
			} catch (ParseException e1) {
				e1.printStackTrace();
			}
			System.out.println("date:"+date1.getDate());
			List l=dao.single_Date(model, fname,date);	
			System.out.println(l);
			map.put("data", l);
			return map;
		}
		
		//view
			@RequestMapping(value="get_data_wflag.db", method=RequestMethod.GET , headers="Accept=*/*",  produces="application/json")
			public @ResponseBody HashMap<String ,List>  get_without_flag(@RequestParam("model") String E) {

				HashMap<String, List> map = new HashMap<String, List>();
				List l=dao.show(E);	
				map.put("data", l);
				return map;
			}
		
		//permenent delete
		@RequestMapping(value="prdelete.db", method=RequestMethod.POST , headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String,Boolean> parmenantedelete(@RequestParam("model") String model,@RequestParam("fname") String fname,@RequestParam("id") long id) {
	        
			int i = dao.delete(model,fname, id);
	        HashMap<String,Boolean> map = new HashMap<String,Boolean>();
			
	        if(i>0)
			{
				map.put("status",true);
			}
			else{
				map.put("status",false);
			}
			return  map;
		}
		
		//temparary delete
		@RequestMapping(value="delete.db", method=RequestMethod.POST , headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String,Boolean> delete(@RequestParam("model") String model,@RequestParam("fname") String fname,@RequestParam("id") int id) {
	        
			int i = dao.update_flag(model, fname, id);
	        HashMap<String,Boolean> map = new HashMap<String,Boolean>();
			
	        if(i>0)
			{
				map.put("status",true);
			}
			else{
				map.put("status",false);
			}
			return  map;
		}
		
		//data get from post
		@RequestMapping(value="dmodel.db", method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String ,List>  dynamic_Data(@RequestParam("model") String E) {

			HashMap<String, List> map = new HashMap<String, List>();
			List ls=dao.display(E);	
			map.put("data", ls);
			return map;
		}
		
		//dynamic data from id
		@RequestMapping(value="dmodelwithid.db", method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String ,List>  dynamic_Data_with_id(@RequestParam("model") String model,@RequestParam("fname") String fname,@RequestParam("id") int id) {

		//	System.out.println("model :"+model+" fname:"+fname+" id:"+id);
			HashMap<String, List> map = new HashMap<String, List>();
			List l=dao.dynamicdata(model, fname, id);	
			map.put("data", l);
			return map;
		}
		
		//Dynamic data With where
//		@RequestMapping(value="dmodelwithwhere.db", method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
//		public @ResponseBody HashMap<String ,List>  dynamic_Data_where(@RequestParam("model") String model,@RequestParam("fname") String fname,@RequestParam("id") int id) {
//
//		//	System.out.println("model :"+model+" fname:"+fname+" id:"+id);
//			HashMap<String, List> map = new HashMap<String, List>();
//			List l=dao.dynamicdata(model, fname, id);	
//			map.put("data", l);
//			return map;
//		}
		
		//dynamic data from id using get method
		@RequestMapping(value="dmodelWithData.db", method=RequestMethod.GET, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String ,List>  dynamic_Data_with_get(@RequestParam("model") String model,@RequestParam("fname") String fname,@RequestParam("id") int id) {
			//	System.out.println(" dmodelWithData model :"+model+" fname:"+fname+" id:"+id);
			HashMap<String, List> map = new HashMap<String, List>();
			List l=dao.dynamicdata(model, fname, id);	
			map.put("data", l);
			return map;
		}
		
		
		//dynamic data from column using post method
		@RequestMapping(value="distinct.db", method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String ,List>  dynamic_with_get(@RequestParam("model") String model,@RequestParam("col") String col) {

//				System.out.println(" distinct model :"+model+" column_name:"+col);
				HashMap<String, List> map = new HashMap<String, List>();
				List l=dao.select_dintinct_col(col, model);	
				map.put("data", l);
				return map;
		}
		
		//dynamic data from id using get method
		@RequestMapping(value="distinctWithId.db", method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String ,List>  dynamic_with_get_with_id(@RequestParam("model") String model,@RequestParam("col") String col,@RequestParam("fname") String fname,@RequestParam("id") int id) {

//				System.out.println(" distinct model :"+model+" column_name:"+col+ "fname:"+fname+" id: "+id);
				HashMap<String, List> map = new HashMap<String, List>();
				List ls=dao.select_dintinct_col_with_id(col, model, fname, id);
				map.put("data", ls);
				return map;
		}
		
		//location
		
		//state
		@RequestMapping(value="state.db",method=RequestMethod.GET)
		public String state(){
			return "state";
		}
		
		@RequestMapping(value="state.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> stateadd(@RequestParam("sid") int hid,@RequestParam("sname") String sname) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			State_model st =null;
			if (hid == 0) {
				st = new State_model(sname);
				st=dao.insert(st);
			}else {
				st = new State_model(hid,sname);
				st=dao.insert(st);
			}
			if (st != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		//city
		@RequestMapping(value="city.db",method=RequestMethod.GET)
		public String city(){
			return "city";
		}
		
		@RequestMapping(value="city.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> cityadd(@RequestParam("id") int id,@RequestParam("cname") String cname,@RequestParam("state") int sid) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			City_model cm =null;
			State_model sm=new State_model(sid);
			if (id == 0) {
				cm=new City_model(cname, sm);
				cm=dao.insert(cm);
			}else {
				cm=new City_model(id,cname, sm);
				cm=dao.insert(cm);
			}
			if (cm != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		//area
		@RequestMapping(value="area.db",method=RequestMethod.GET)
		public String area(){
			return "area";
		}
		
		@RequestMapping(value="area.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> areaadd(@RequestParam("id") int id,@RequestParam("aname") String aname,@RequestParam("state") int sid,@RequestParam("city") int cid,@RequestParam("pincode") int pincode) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			City_model cm =new City_model(cid);
			State_model sm=new State_model(sid);
			Area_model am=null;
			if (id == 0) {
				am=new Area_model(aname, pincode, sm, cm);
				am=dao.insert(am);
			}else {
				am=new Area_model(id,aname, pincode, sm, cm);
				am=dao.insert(am);
			}
			if (am != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		//use
		//role
		@RequestMapping(value="role.db",method=RequestMethod.GET)
		public String role(){
			return "role";
		}
		
		@RequestMapping(value="role.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> roleadd(@RequestParam("id") int id,@RequestParam("rname") String rname,@RequestParam("rdesc") String rdesc) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			Role_model rm =null;
			if (id == 0) {
				rm = new Role_model(rname,rdesc);
				rm=dao.insert(rm);
			}else {   
				   rm = new Role_model(id,rname,rdesc);
				   rm=dao.insert(rm);
			}
			if (rm != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		//use
		//Privilege
		@RequestMapping(value="privilege.db",method=RequestMethod.GET)
		public String privilege(){
			return "privilege";
		}
		
		@RequestMapping(value="privilege.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> privilegeadd(@RequestParam("id") int id,@RequestParam("pname") String pname,@RequestParam("font_code") String font_code,@RequestParam("location") String location) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			Privilege_model pm =null;
			if (id == 0) {
				pm = new Privilege_model(pname,location, font_code);
				pm=dao.insert(pm);
			}else {
				pm = new Privilege_model(id,pname,location,font_code);
				pm=dao.insert(pm);
			}
			if (pm != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		//use
		//privilege_component
		@RequestMapping(value="pcomponent.db",method=RequestMethod.GET)
		public String privilege_component(){
			return "pcomponent";
		}
		
		@RequestMapping(value="pcomponent.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> privilege_componentadd(@RequestParam("cname") String[] cname,@RequestParam("clink") String[] clink,@RequestParam("privilege")int pid) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			Privilege_model pm =new Privilege_model(pid);
			Privillege_component_model pc=null;
				for (int i = 0; i < clink.length; i++) {
					pc = new Privillege_component_model(cname[i], clink[i], pm);
					dao.insert(pc);
				}
			if (pc != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		//khali single pcomponents update matej 6
		@RequestMapping(value="pcomponents.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> privilege_componentsadd(@RequestParam("compid") int id,@RequestParam("compname") String cname,@RequestParam("complink") String clink,@RequestParam("privilege")int pid) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			Privilege_model pm =new Privilege_model(pid);
			Privillege_component_model pc=null;
			if (id == 0) {
				pc = new Privillege_component_model(cname, clink, pm);
				pc= dao.insert(pc);
			}else {
				pc = new Privillege_component_model(id, cname, clink, pm);
				pc = dao.insert(pc);
			}
			if (pc != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		//add priv component of component
		@RequestMapping(value="pcompofcomponent.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> pcompofcomponent(@RequestParam("cname") String[] cname,@RequestParam("clink") String[] clink,@RequestParam("privilege")int pid,@RequestParam("pccomponent") int pcid) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			Privilege_model pm =new Privilege_model(pid);
			Privillege_component_model pc=new Privillege_component_model(pcid);
			Privilege_comp_comp_model pccm=null;
			for (int i = 0; i < clink.length; i++) {
					pccm=new Privilege_comp_comp_model(cname[i], clink[i], pm, pc);
					pccm=dao.insert(pccm);
			}
			if (pccm != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		@RequestMapping(value="pcompofcomp.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> pcompofcomp(@RequestParam("id") int id,@RequestParam("cname") String cname,@RequestParam("clink") String clink,@RequestParam("privilege")int pid,@RequestParam("prvcname") int privcomp)
		{
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			Privilege_model pm =new Privilege_model(pid);
			Privillege_component_model pc=new Privillege_component_model(privcomp);
			Privilege_comp_comp_model pccm=null;
			if (id == 0) {
				pccm=new Privilege_comp_comp_model(cname, clink, pm, pc);
				pccm= dao.insert(pccm);
			}else {
				pccm=new Privilege_comp_comp_model(id,cname, clink, pm, pc);
				pccm= dao.insert(pccm);
			}
			if (pccm != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		
		@RequestMapping(value="pccompofcomp.db",method=RequestMethod.GET)
		public String pcomponent_details(@RequestParam("record") int id,HttpSession ses){
			//System.out.println(id);
			ses.setAttribute("pcid", id);
			//System.out.println("inline:");
			return "pcomponent_of_component";
		}
		
		
		@RequestMapping(value="pccompofcomponent.db",method=RequestMethod.GET)
		public String pccompofcomponent(@RequestParam("record") int id,HttpSession ses){
			//System.out.println(id);
			ses.setAttribute("pccid", id);
			//System.out.println("inline:");
			return "pcompofcomp_details";
		}
		
		//assign privilege to role
		@RequestMapping(value="assi_priv_role.db",method=RequestMethod.GET)
		public String assi_priv_role(){
			return "assi_priv_role";
		}
		
		@RequestMapping(value="assi_priv_to_role.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> assi_priv_to_role_Add(@RequestParam("role") int rid ,HttpServletRequest request) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>();

			Assi_priv_to_role aspr=null;
			Privilege_model pm=null;
			Privillege_component_model pcm=null;
			Role_model rm=new Role_model(rid);
			
			dao.update_flag("Assi_priv_to_role", "rid", rid);
			
			String privlege[]=request.getParameterValues("privlege"); 	
			
			for (int i = 0; i < privlege.length; i++) {
				
				
				String priv_comp[]=request.getParameterValues("priv_comp"+privlege[i]);
				System.out.println("privilege :"+privlege[i]);
				for (int j = 0; j < priv_comp.length; j++) {
//					System.out.println("privilege component : "+priv_comp[j]);
					String access="";
					String access1[]=request.getParameterValues("access"+privlege[i]+priv_comp[j]);
					for (int k = 0; k < access1.length; k++) {
						access+=access1[k]+","; //convert to string
//						System.out.println("access :"+access1[k]);
					}
					int prvid=Integer.parseInt(privlege[i]);
					int prvcid=Integer.parseInt(priv_comp[j]);
					pm=new Privilege_model(prvid);
					pcm=new Privillege_component_model(prvcid);
					aspr=new Assi_priv_to_role(rm, pm, pcm, access);
//					aspr=dao.insert(aspr);
					System.out.println("privlege:"+privlege[i]+"priv_comp:"+priv_comp[j] +"access: "+access);
				}
			}
			
			if (aspr != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		//employee
		@RequestMapping(value="employee.db",method=RequestMethod.GET)
		public String employee(){
			return "employee";
		}
		
		@Autowired
		ServletContext cx;
		
		public File getpath() {
			String path = cx.getRealPath("assets/admin/image/employee/");
			return new File(path);
		}
		
		@RequestMapping(value="employee.db",method = RequestMethod.POST, headers = "Accept=*/*", produces = "application/json")
		public @ResponseBody HashMap<String, Boolean> employeeInsert(@RequestParam("id") int id,@RequestParam("username") String username,
				@RequestParam("password") String password, @RequestParam("name") String name,
				@RequestParam("email") String email,@RequestParam("date") String date,
				@RequestParam("gender") String gender,@RequestParam("address") String address,
				@RequestParam("image") MultipartFile file,@RequestParam("mobile") long mobileNumber,
				@RequestParam("rid") int rid, @RequestParam("sid") int sid,@RequestParam("cid") int cid,
				@RequestParam("aid") int aid) {

			
			
//			System.out.println(username + "\n" + password + "\n" + gender + "\n" + address + "\n" + mobileNumber);
//			System.out.println(date + "\n" + sid + "\n" + file.getOriginalFilename() + "\n" + address);
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>();
			SimpleDateFormat sd=new SimpleDateFormat("yyyy-MM-dd"); 
			Date date1 = null;
			try {
				date1=sd.parse(date);
				System.out.println("date is :"+date1);
			} catch (ParseException e1) {
				e1.printStackTrace();
			}
			//Date bdate = new SimpleDateFormat("yyyy-MM-dd").parse(date);
			//String date=new SimpleDateFormat("yyyy-MM-dd").parse(date); 
			//int dt=bdate.getDate();
			Role_model rm =new Role_model(rid);
			State_model sm=new State_model(sid);
			City_model cm=new City_model(cid);
			Area_model am=new Area_model(aid);
			Employee_model em=null;
			
			try {
				file.transferTo(new File(getpath(), file.getOriginalFilename()));
			
			if(id==0){
				em=new Employee_model(username, password, name, email, gender, address, file.getOriginalFilename(), mobileNumber, rm, sm, cm, am, date1);
//				em=dao.insert(em);
			}
			else{
				Date uptime=new Date();
				em=new Employee_model(id,username, password, name, email, gender, address, file.getOriginalFilename(), mobileNumber, rm, sm, cm, am, date1,uptime);
//				em=dao.insert(em);
			}
			if (em != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			}
			catch (IllegalStateException | IOException e) {
				hk.put("input", false);
			}

			return hk;
		}
		
		//assi_priv_user
		@RequestMapping(value="assi_priv_user.db",method=RequestMethod.GET)
		public String assi_priv_user(){
			return "assi_priv_user";
		}
		
		//insert code
		@RequestMapping(value="assi_priv_user.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> addAssi_priv_user(@RequestParam("role") int rid,@RequestParam("empid") int emp_id,HttpServletRequest request) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			Role_model rm =new Role_model(rid);
			Employee_model em=new Employee_model(emp_id);
			
			dao.update_flag("Assi_priv_user", "emp_id", emp_id);
			Privilege_model pm=null;
			Privillege_component_model pcm=null;
			Assi_priv_user aspuser=null;
			
			System.out.println(rid +" role :"+emp_id);
			String privilege[]=request.getParameterValues("privilege");
			
			for (int i = 0; i < privilege.length; i++) {
//				System.out.println("privilege:"+ privilege[i]);
				String priv_comp[]=request.getParameterValues("priv_comp"+privilege[i]);
					for (int j = 0; j < priv_comp.length; j++) {
//						System.out.println("privilege component:" +priv_comp[j]);
						String access="";
						String access1[]=request.getParameterValues("access"+privilege[i]+priv_comp[j]);
						for (int k = 0; k < access1.length; k++) {
							access+=access1[k]+","; //convert to string
//							System.out.println("access :"+access1[k]);
						}
						System.out.println("privilege:"+privilege[i] +"privilege component:"+priv_comp[j]+ "access:"+access);
						int prvid=Integer.parseInt(privilege[i]);
						int prvcid=Integer.parseInt(priv_comp[j]);
						pm=new Privilege_model(prvcid);
						pcm=new Privillege_component_model(prvcid);
						aspuser=new Assi_priv_user(rm, em, pm, pcm, access);
						aspuser=dao.insert(aspuser);
					}
			}
			if (aspuser != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		//login
		@RequestMapping(value="login",method=RequestMethod.GET)
		public String login(HttpSession ses){
			ses.removeAttribute("userid");
			ses.removeAttribute("useremail");
			ses.removeAttribute("uroleid");
			ses.removeAttribute("role");
			ses.invalidate();
			return "login";
		}
		
		@RequestMapping(value="loginError.db",method=RequestMethod.GET)
		public String Error(){
			return "error";
		}
		
		@RequestMapping(value="login404.db",method=RequestMethod.GET)
		public String login404(){
			return "login404";
		}
		
		
		//forgot passs
		
		@RequestMapping(value="forget_pass.db",method=RequestMethod.GET)
		public String forgotPass(){
			return "forget_pass";
		}
		
		@RequestMapping(value="forget_pass.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> forget_pass(@RequestParam("mobile_number") long mobile_number,HttpSession ses) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			
			List<Employee_model> ls=dao.display("Employee_model", "mobile_number=" + mobile_number + "");
			if(!ls.isEmpty()){
				if(ls.get(0).getMobile_number()==mobile_number){
					System.out.println(ls.get(0).getEmp_id());
					ses.setAttribute("update_uid", ls.get(0).getEmp_id());
				}
			}
			else{
				System.out.println("number nathi malyo"+mobile_number);
			}
			
			if (!ls.isEmpty()) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		@RequestMapping(value="otp.db",method=RequestMethod.GET)
		public String otp(){
			return "otp";
		}
		
		@RequestMapping(value="confirm_pass.db",method=RequestMethod.GET)
		public String confirm_password(){
			return "confirm_pass";
		}
		
		@RequestMapping(value="confirm_pass.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> confirm_password(HttpSession ses,@RequestParam("pass") String passwd) {
			
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			int x;
			int emplid=(int) ses.getAttribute("update_uid");
			x=dao.update_single_value("Employee_model", "password", passwd, "emp_id", emplid);
			if (x>0) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		
		//company
		
		public File getpath1() {
			String path = cx.getRealPath("assets/admin/image/company/");
			return new File(path);
		}
		
		@RequestMapping(value="company.db",method=RequestMethod.GET)
		public String compony(){
			return "company";
		}
			
		@RequestMapping(value="company.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String ,Boolean> addcompony(@RequestParam("id")int id,@RequestParam("comp_name")String name,@RequestParam("tax")String tax,
				@RequestParam("owner_name")String owner_name,@RequestParam("email")String email,@RequestParam("mnumber1")long mnumber1,
				@RequestParam("mnumber2")long mnumber2,@RequestParam("webname")String webname,@RequestParam("logo")MultipartFile logo,
				@RequestParam("state") int state,@RequestParam("city") int city,@RequestParam("area") int area,@RequestParam("zipcode") int zipcode,
				@RequestParam("address") String address,@RequestParam("gst_number") String gst_number,@RequestParam("pan_number") String pan_number,
				@RequestParam("bank_name") String bank_name,@RequestParam("account_number") String account_number,@RequestParam("branch") String branch,
				@RequestParam("ifsc_code") String ifsc_code){
			HashMap<String, Boolean> hm=new HashMap<String, Boolean>();
			
			State_model sm=new State_model(state);
			City_model city_m=new City_model(city);
			Area_model am=new Area_model(area);
			Company_model cm=null;
			System.out.println(name+" "+tax +" "+logo.getOriginalFilename()+" "+ owner_name +" "+ email +" "+ mnumber1 +" "+ mnumber2 +" "+ webname);
			
			try {
				logo.transferTo(new File(getpath1(), logo.getOriginalFilename()));
			if(id==0){
				System.out.println("id 0 mali");
				cm=new Company_model(name, tax, owner_name, email, mnumber1, mnumber2, webname, logo.getOriginalFilename(), sm, city_m, am, address, gst_number, pan_number, bank_name, account_number, branch, ifsc_code,zipcode);
				cm=dao.insert(cm);
			}
			else{
				cm=new Company_model(id,name, tax, owner_name, email, mnumber1, mnumber2, webname, logo.getOriginalFilename(), sm, city_m, am, address, gst_number, pan_number, bank_name, account_number, branch, ifsc_code,zipcode);
				cm=dao.insert(cm);
			}
			if (cm != null) {
				System.out.println("add thayu");
				hm.put("input", true);
			}else {
				hm.put("input", false);
			}
			}
			catch (IllegalStateException | IOException e) {
				hm.put("input", false);
			}
			return hm;
		}

		//log
		@RequestMapping(value="log.db",method=RequestMethod.GET)
		public String getlog(){
			//ModelMap m
			//m.put("data", dao.show("Log_model"));
			return "log";
		}
		
		@RequestMapping(value="log.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> log(@RequestParam("uid") int eid,@RequestParam("rid") int rid,@RequestParam("cid") int cid,@RequestParam("accs") String access,HttpSession ses) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			ses.setAttribute("access", access);
//			System.out.println(eid +" "+rid+" "+cid);
			Role_model rm =new Role_model(rid);
			Employee_model em=new Employee_model(eid);
			Date dt=new Date();
			Privillege_component_model pcm=new Privillege_component_model(cid);
			Log_model lm=new Log_model(em, rm, pcm,dt);
			dao.insert(lm);
			return hk;
		}
		
		
		//Accounts
		@RequestMapping(value="account_type.db",method=RequestMethod.GET)
		public String accounts_type(){
			return "account_type";
		}
		
		@RequestMapping(value="account_type.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> addAccountType(@RequestParam("id") int id,@RequestParam("acname") String acname,@RequestParam("acdesc") String acdesc) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			Account_model am =null;
			if (id == 0) {
				am = new Account_model(acname,acdesc);
				am=dao.insert(am);
			}else {   
			    am = new Account_model(id,acname,acdesc);
			    am=dao.insert(am);
			}
			if (am != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		//groups
		@RequestMapping(value="group.db",method=RequestMethod.GET)
		public String groups(){
			return "group";
		}
		
		@RequestMapping(value="group.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> addGroup(@RequestParam("id") int id,@RequestParam("gname") String gname
				,@RequestParam("gcode") String gcode,@RequestParam("gdesc") String gdesc) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			Group_model gm =null;
			if (id == 0) {
				gm = new Group_model(gname,gcode,gdesc);
				gm=dao.insert(gm);
			}else {   
			    gm = new Group_model(id,gname,gcode,gdesc);
			    gm=dao.insert(gm);
			}
			if (gm != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		//Accounts
		@RequestMapping(value="accounts.db",method=RequestMethod.GET)
		public String accounts(){
			return "accounts";
		}
		
		@RequestMapping(value="accounts.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> addAccounts(@RequestParam("id") int id,
				@RequestParam("pcode") String party_code, @RequestParam("partyname") String party_name,
				@RequestParam("gid") int groupId, @RequestParam("acid") int accountId,
				@RequestParam("cperson") String contact_person, @RequestParam("phone_number") String phone_number,
				@RequestParam("mobile_number") String mobile_number, @RequestParam("email") String email,
				@RequestParam("sid") int stateId, @RequestParam("cid") int cityId, @RequestParam("aid") int areaId,
				@RequestParam("discount") int discount,@RequestParam("transporter") String transporter,
				@RequestParam("address") String address, @RequestParam("gstNumber") String gst_number,
				@RequestParam("agent") String agent,@RequestParam("oftype") String oftype,
				@RequestParam("tdays") int tdays) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			
			Group_model gm = new Group_model(groupId);
			Account_model acm = new Account_model(accountId);
			State_model sm = new State_model(stateId);
			City_model cm = new City_model(cityId);	
			Area_model am = new Area_model(areaId);
			Account_detail_model adm=null;
			
			if (id == 0) {
				adm=new Account_detail_model(party_code, party_name, gm, acm, contact_person, Long.parseLong(phone_number), Long.parseLong(mobile_number), email, sm, cm, am, address, discount, gst_number, transporter, agent, oftype, tdays);
				adm=dao.insert(adm);
			}else {   
				adm=new Account_detail_model(id,party_code, party_name, gm, acm, contact_person, Long.parseLong(phone_number), Long.parseLong(mobile_number), email, sm, cm, am, address, discount, gst_number, transporter, agent, oftype, tdays);
			    adm=dao.insert(adm);
			}
			if (adm != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		//expense
		@RequestMapping(value="expense.db",method=RequestMethod.GET)
		public String expense(){
			return "expense";
		}
		
		@RequestMapping(value="expense.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> addexpense(@RequestParam("id") int id,
				@RequestParam("pcode") String pcode,@RequestParam("expensename") String expensename,
				@RequestParam("acid") int acid,@RequestParam("gpid") int gpid) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			Account_model acm=new Account_model(acid);
			Group_model gm =new Group_model(gpid);
			Expense_model expm=null;
			if (id == 0) {
				expm=new Expense_model(pcode, expensename, acm, gm);
				expm=dao.insert(expm);
			}else {   
				expm=new Expense_model(id,pcode, expensename, acm, gm);
				expm=dao.insert(expm);
			}
			if (expm!= null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		@RequestMapping(value="material.db",method=RequestMethod.GET)
		public String material(){
			return "material";
		}
		
		@RequestMapping(value="material.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> addmaterial(@RequestParam("id") int id,@RequestParam("materialName") String material_name,@RequestParam("materialDesc") String material_desc) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			Material_model mm =null;
			if (id == 0) {
				mm = new Material_model(material_name, material_desc);
				mm=dao.insert(mm);
			}else {   
				mm = new Material_model(id,material_name, material_desc);
				mm=dao.insert(mm);
			}
			if (mm != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		@RequestMapping(value="fabric.db",method=RequestMethod.GET)
		public String fabric(){
			return "fabric";
		}
		
		@RequestMapping(value="finish_material.db",method=RequestMethod.GET)
		public String finish_material(){
			return "finish_material";
		}
		
		@RequestMapping(value="raw_material.db",method=RequestMethod.GET)
		public String raw_material(){
			return "raw_material";
		}
		
		@RequestMapping(value="material_details.db",method=RequestMethod.GET)
		public String material_details(){
			return "material_details";
		}
		
		public File addpath() {
			String path = cx.getRealPath("assets/admin/image/materialdetails/");
			return new File(path);
		}
		
		
		@RequestMapping(value = "material_details.db", method = RequestMethod.POST, headers = "Accept=*/*", produces = "application/json")
		public @ResponseBody HashMap<String, Boolean> addMaterial_details(@RequestParam("id") int id,
				@RequestParam("item_code") String itemCode, @RequestParam("description") String description,
				@RequestParam("baleNumber") String baleNumber, @RequestParam("size") int size,
				@RequestParam("itemgroup") int itemgroup, @RequestParam("unit") int unit,
				@RequestParam("op_balence") int op_balenece, @RequestParam("op_bal") int op_bal,
				@RequestParam("purchaseRate") float purchaseRate, @RequestParam("purchaseCode") int purchaseCode,
				@RequestParam("purchaseDate") String purchaseDate, @RequestParam("salesRate") int salesRate,
				@RequestParam("mrp") float mrp, @RequestParam("discount") float discount,
				@RequestParam("itemQuality") String itemQuality, @RequestParam("perBundle") int perBundle,
				@RequestParam("gstRate") int gstRate, @RequestParam("hsnCode") String hsnCode,
				@RequestParam("supplier") int supplier, @RequestParam("sendTo") String sendTo,
				@RequestParam("image1") MultipartFile image) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>();

			Employee_model emp = new Employee_model(supplier);
			Item_group_model dp = new Item_group_model(itemgroup);
			Material_details_model em = null;

			try {
				
				image.transferTo(new File(addpath(), image.getOriginalFilename()));

				if (id == 0) {
					em = new Material_details_model(itemCode, description, baleNumber, size, dp, unit, op_balenece, op_bal,
							purchaseRate, purchaseCode, purchaseDate, salesRate, mrp, discount, itemQuality, perBundle,
							gstRate, hsnCode, emp, sendTo, image.getOriginalFilename());
					em = dao.insert(em);
				} else {
					em = new Material_details_model(id, itemCode, description, baleNumber, size, dp, unit, op_balenece,
							op_bal, purchaseRate, purchaseCode, purchaseDate, salesRate, mrp, discount, itemQuality,
							perBundle, gstRate, hsnCode, emp, sendTo, image.getOriginalFilename());
					em = dao.insert(em);
				}
				if (em != null) {
					hk.put("input", true);
				} else {
					hk.put("input", false);
				}
			} catch (IllegalStateException | IOException e) {
				hk.put("input", false);
			}

			return hk;
		}
		
		
		
		@RequestMapping(value="type_work.db",method=RequestMethod.GET)
		public String type_work(){
			return "type_work";
		}
		
		@RequestMapping(value="type_work.db",method=RequestMethod.POST, headers="Accept=*/*",  produces="application/json")
		public @ResponseBody HashMap<String, Boolean> type_workadd(@RequestParam("id") int id,@RequestParam("short_name") String short_name,@RequestParam("work_name") String work_name) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>(); 
			Type_work_model twm =null;
			if (id == 0) {
				twm = new Type_work_model(short_name, work_name);
				twm=dao.insert(twm);
			}else {   
				twm= new Type_work_model(id,short_name, work_name);
				twm=dao.insert(twm);
			}
			if (twm != null) {
				hk.put("input", true);
			}else {
				hk.put("input", false);
			}
			return hk;
		}
		
		//unit
		@RequestMapping(value="unit.db",method=RequestMethod.GET)
		public String unit(){
			return "unit";
		}
		
		@RequestMapping(value = "unit.db", method = RequestMethod.POST, headers = "Accept=*/*", produces = "application/json")
		public @ResponseBody HashMap<String, Boolean> addunit(@RequestParam("id") int id,
				@RequestParam("unit_name") String unit_name) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>();
			Unit_model um = null;
			if (id == 0) {
				um = new Unit_model(unit_name);
				um = dao.insert(um);
			} else {
				um = new Unit_model(id, unit_name);
				um = dao.insert(um);
			}
			if (um != null) {
				hk.put("input", true);
			} else {
				hk.put("input", false);
			}
			return hk;
		}
		
		//item group
		@RequestMapping(value="item_group.db",method=RequestMethod.GET)
		public String item_group(){
			return "item_group";
		}
		
		@RequestMapping(value = "item_group.db", method = RequestMethod.POST, headers = "Accept=*/*", produces = "application/json")
		public @ResponseBody HashMap<String, Boolean> addItem_group(@RequestParam("id") int id,
				@RequestParam("item_size") String item_size,@RequestParam("mid") int mid,@RequestParam("unit") int unit,
				@RequestParam("items") int items,@RequestParam("short_name") String short_name) {
			HashMap<String, Boolean> hk = new HashMap<String, Boolean>();
			Material_model mm = new Material_model(mid);
			Unit_model um=new Unit_model(unit);
			Item_group_model igm = null;
			if (id == 0) {
				igm=new Item_group_model(item_size, mm, um, items, short_name);
				igm = dao.insert(igm);
			} else {
				igm = new Item_group_model(id,item_size, mm, um, items, short_name);
				igm = dao.insert(igm);
			}
			if (igm != null) {
				hk.put("input", true);
			} else {
				hk.put("input", false);
			}
			return hk;
		}

		
		
		
		//order estimate
		@RequestMapping(value="order_estimate.db",method=RequestMethod.GET)
		public String estimate(){
			return "order_estimate";
		}
		
		//retail bill
		@RequestMapping(value="retail_bill.db",method=RequestMethod.GET)
		public String Retail_bill(){
			return "retail_bill";
		}

		//retail bill
		@RequestMapping(value="tax_bill.db",method=RequestMethod.GET)
		public String Tax_bill(){
			return "tax_bill";
		}
		
		//retail bill
		@RequestMapping(value="purchase_bill.db",method=RequestMethod.GET)
		public String Purchase_bill(){
			return "purchase_bill";
		}		
		
}
