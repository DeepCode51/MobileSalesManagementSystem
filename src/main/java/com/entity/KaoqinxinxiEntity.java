package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 考勤信息
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2023-03-03 20:21:29
 */
@TableName("kaoqinxinxi")
public class KaoqinxinxiEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public KaoqinxinxiEntity() {
		
	}
	
	public KaoqinxinxiEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 用户名
	 */
					
	private String yonghuming;
	
	/**
	 * 姓名
	 */
					
	private String xingming;
	
	/**
	 * 考勤状况
	 */
					
	private String kaoqinzhuangkuang;
	
	/**
	 * 考勤日期
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd")
	@DateTimeFormat 		
	private Date kaoqinriqi;
	
	/**
	 * 考勤说明
	 */
					
	private String kaoqinshuoming;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
	 * 设置：考勤状况
	 */
	public void setKaoqinzhuangkuang(String kaoqinzhuangkuang) {
		this.kaoqinzhuangkuang = kaoqinzhuangkuang;
	}
	/**
	 * 获取：考勤状况
	 */
	public String getKaoqinzhuangkuang() {
		return kaoqinzhuangkuang;
	}
	/**
	 * 设置：考勤日期
	 */
	public void setKaoqinriqi(Date kaoqinriqi) {
		this.kaoqinriqi = kaoqinriqi;
	}
	/**
	 * 获取：考勤日期
	 */
	public Date getKaoqinriqi() {
		return kaoqinriqi;
	}
	/**
	 * 设置：考勤说明
	 */
	public void setKaoqinshuoming(String kaoqinshuoming) {
		this.kaoqinshuoming = kaoqinshuoming;
	}
	/**
	 * 获取：考勤说明
	 */
	public String getKaoqinshuoming() {
		return kaoqinshuoming;
	}

}
