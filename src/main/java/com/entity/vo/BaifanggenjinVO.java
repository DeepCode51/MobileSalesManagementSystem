package com.entity.vo;

import com.entity.BaifanggenjinEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
 

/**
 * 拜访跟进
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2023-03-03 20:21:29
 */
public class BaifanggenjinVO  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 客户名称
	 */
	
	private String kehumingcheng;
		
	/**
	 * 客户类型
	 */
	
	private String kehuleixing;
		
	/**
	 * 联系电话
	 */
	
	private String lianxidianhua;
		
	/**
	 * 客户意向
	 */
	
	private String kehuyixiang;
		
	/**
	 * 跟进情况
	 */
	
	private String genjinqingkuang;
		
	/**
	 * 用户名
	 */
	
	private String yonghuming;
		
	/**
	 * 姓名
	 */
	
	private String xingming;
		
	/**
	 * 添加时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date tianjiashijian;
				
	
	/**
	 * 设置：客户名称
	 */
	 
	public void setKehumingcheng(String kehumingcheng) {
		this.kehumingcheng = kehumingcheng;
	}
	
	/**
	 * 获取：客户名称
	 */
	public String getKehumingcheng() {
		return kehumingcheng;
	}
				
	
	/**
	 * 设置：客户类型
	 */
	 
	public void setKehuleixing(String kehuleixing) {
		this.kehuleixing = kehuleixing;
	}
	
	/**
	 * 获取：客户类型
	 */
	public String getKehuleixing() {
		return kehuleixing;
	}
				
	
	/**
	 * 设置：联系电话
	 */
	 
	public void setLianxidianhua(String lianxidianhua) {
		this.lianxidianhua = lianxidianhua;
	}
	
	/**
	 * 获取：联系电话
	 */
	public String getLianxidianhua() {
		return lianxidianhua;
	}
				
	
	/**
	 * 设置：客户意向
	 */
	 
	public void setKehuyixiang(String kehuyixiang) {
		this.kehuyixiang = kehuyixiang;
	}
	
	/**
	 * 获取：客户意向
	 */
	public String getKehuyixiang() {
		return kehuyixiang;
	}
				
	
	/**
	 * 设置：跟进情况
	 */
	 
	public void setGenjinqingkuang(String genjinqingkuang) {
		this.genjinqingkuang = genjinqingkuang;
	}
	
	/**
	 * 获取：跟进情况
	 */
	public String getGenjinqingkuang() {
		return genjinqingkuang;
	}
				
	
	/**
	 * 设置：用户名
	 */
	 
	public void setYonghuming(String yonghuming) {
		this.yonghuming = yonghuming;
	}
	
	/**
	 * 获取：用户名
	 */
	public String getYonghuming() {
		return yonghuming;
	}
				
	
	/**
	 * 设置：姓名
	 */
	 
	public void setXingming(String xingming) {
		this.xingming = xingming;
	}
	
	/**
	 * 获取：姓名
	 */
	public String getXingming() {
		return xingming;
	}
				
	
	/**
	 * 设置：添加时间
	 */
	 
	public void setTianjiashijian(Date tianjiashijian) {
		this.tianjiashijian = tianjiashijian;
	}
	
	/**
	 * 获取：添加时间
	 */
	public Date getTianjiashijian() {
		return tianjiashijian;
	}
			
}
