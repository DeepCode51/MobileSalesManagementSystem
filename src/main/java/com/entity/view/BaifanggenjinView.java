package com.entity.view;

import com.entity.BaifanggenjinEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 拜访跟进
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2023-03-03 20:21:29
 */
@TableName("baifanggenjin")
public class BaifanggenjinView  extends BaifanggenjinEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public BaifanggenjinView(){
	}
 
 	public BaifanggenjinView(BaifanggenjinEntity baifanggenjinEntity){
 	try {
			BeanUtils.copyProperties(this, baifanggenjinEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
