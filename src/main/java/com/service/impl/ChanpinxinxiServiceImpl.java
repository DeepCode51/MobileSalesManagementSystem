package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.ChanpinxinxiDao;
import com.entity.ChanpinxinxiEntity;
import com.service.ChanpinxinxiService;
import com.entity.vo.ChanpinxinxiVO;
import com.entity.view.ChanpinxinxiView;

@Service("chanpinxinxiService")
public class ChanpinxinxiServiceImpl extends ServiceImpl<ChanpinxinxiDao, ChanpinxinxiEntity> implements ChanpinxinxiService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<ChanpinxinxiEntity> page = this.selectPage(
                new Query<ChanpinxinxiEntity>(params).getPage(),
                new EntityWrapper<ChanpinxinxiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<ChanpinxinxiEntity> wrapper) {
		  Page<ChanpinxinxiView> page =new Query<ChanpinxinxiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<ChanpinxinxiVO> selectListVO(Wrapper<ChanpinxinxiEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public ChanpinxinxiVO selectVO(Wrapper<ChanpinxinxiEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<ChanpinxinxiView> selectListView(Wrapper<ChanpinxinxiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public ChanpinxinxiView selectView(Wrapper<ChanpinxinxiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
