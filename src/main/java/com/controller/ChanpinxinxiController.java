package com.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

import com.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.annotation.IgnoreAuth;

import com.entity.ChanpinxinxiEntity;
import com.entity.view.ChanpinxinxiView;

import com.service.ChanpinxinxiService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.CommonUtil;

/**
 * 产品信息
 * 后端接口
 * @author 
 * @email 
 * @date 2023-03-03 20:21:29
 */
@RestController
@RequestMapping("/chanpinxinxi")
public class ChanpinxinxiController {
    @Autowired
    private ChanpinxinxiService chanpinxinxiService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,ChanpinxinxiEntity chanpinxinxi, 
		HttpServletRequest request){

        EntityWrapper<ChanpinxinxiEntity> ew = new EntityWrapper<ChanpinxinxiEntity>();


		PageUtils page = chanpinxinxiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, chanpinxinxi), params), params));
        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,ChanpinxinxiEntity chanpinxinxi, 
		HttpServletRequest request){
        EntityWrapper<ChanpinxinxiEntity> ew = new EntityWrapper<ChanpinxinxiEntity>();

		PageUtils page = chanpinxinxiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, chanpinxinxi), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( ChanpinxinxiEntity chanpinxinxi){
       	EntityWrapper<ChanpinxinxiEntity> ew = new EntityWrapper<ChanpinxinxiEntity>();
      	ew.allEq(MPUtil.allEQMapPre( chanpinxinxi, "chanpinxinxi")); 
        return R.ok().put("data", chanpinxinxiService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(ChanpinxinxiEntity chanpinxinxi){
        EntityWrapper< ChanpinxinxiEntity> ew = new EntityWrapper< ChanpinxinxiEntity>();
 		ew.allEq(MPUtil.allEQMapPre( chanpinxinxi, "chanpinxinxi")); 
		ChanpinxinxiView chanpinxinxiView =  chanpinxinxiService.selectView(ew);
		return R.ok("查询产品信息成功").put("data", chanpinxinxiView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        ChanpinxinxiEntity chanpinxinxi = chanpinxinxiService.selectById(id);
        return R.ok().put("data", chanpinxinxi);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        ChanpinxinxiEntity chanpinxinxi = chanpinxinxiService.selectById(id);
        return R.ok().put("data", chanpinxinxi);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody ChanpinxinxiEntity chanpinxinxi, HttpServletRequest request){
    	chanpinxinxi.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(chanpinxinxi);

        chanpinxinxiService.insert(chanpinxinxi);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody ChanpinxinxiEntity chanpinxinxi, HttpServletRequest request){
    	chanpinxinxi.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(chanpinxinxi);

        chanpinxinxiService.insert(chanpinxinxi);
        return R.ok();
    }


    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody ChanpinxinxiEntity chanpinxinxi, HttpServletRequest request){
        //ValidatorUtils.validateEntity(chanpinxinxi);
        chanpinxinxiService.updateById(chanpinxinxi);//全部更新
        return R.ok();
    }
    
    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        chanpinxinxiService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
    /**
     * 提醒接口
     */
	@RequestMapping("/remind/{columnName}/{type}")
	public R remindCount(@PathVariable("columnName") String columnName, HttpServletRequest request, 
						 @PathVariable("type") String type,@RequestParam Map<String, Object> map) {
		map.put("column", columnName);
		map.put("type", type);
		
		if(type.equals("2")) {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Calendar c = Calendar.getInstance();
			Date remindStartDate = null;
			Date remindEndDate = null;
			if(map.get("remindstart")!=null) {
				Integer remindStart = Integer.parseInt(map.get("remindstart").toString());
				c.setTime(new Date()); 
				c.add(Calendar.DAY_OF_MONTH,remindStart);
				remindStartDate = c.getTime();
				map.put("remindstart", sdf.format(remindStartDate));
			}
			if(map.get("remindend")!=null) {
				Integer remindEnd = Integer.parseInt(map.get("remindend").toString());
				c.setTime(new Date());
				c.add(Calendar.DAY_OF_MONTH,remindEnd);
				remindEndDate = c.getTime();
				map.put("remindend", sdf.format(remindEndDate));
			}
		}
		
		Wrapper<ChanpinxinxiEntity> wrapper = new EntityWrapper<ChanpinxinxiEntity>();
		if(map.get("remindstart")!=null) {
			wrapper.ge(columnName, map.get("remindstart"));
		}
		if(map.get("remindend")!=null) {
			wrapper.le(columnName, map.get("remindend"));
		}


		int count = chanpinxinxiService.selectCount(wrapper);
		return R.ok().put("count", count);
	}
	









}
