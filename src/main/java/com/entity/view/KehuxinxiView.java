package com.entity.view;

import com.entity.KehuxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 客户信息
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2023-03-03 20:21:29
 */
@TableName("kehuxinxi")
public class KehuxinxiView  extends KehuxinxiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public KehuxinxiView(){
	}
 
 	public KehuxinxiView(KehuxinxiEntity kehuxinxiEntity){
 	try {
			BeanUtils.copyProperties(this, kehuxinxiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
