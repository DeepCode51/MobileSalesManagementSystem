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


import com.dao.BaifanggenjinDao;
import com.entity.BaifanggenjinEntity;
import com.service.BaifanggenjinService;
import com.entity.vo.BaifanggenjinVO;
import com.entity.view.BaifanggenjinView;

@Service("baifanggenjinService")
public class BaifanggenjinServiceImpl extends ServiceImpl<BaifanggenjinDao, BaifanggenjinEntity> implements BaifanggenjinService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<BaifanggenjinEntity> page = this.selectPage(
                new Query<BaifanggenjinEntity>(params).getPage(),
                new EntityWrapper<BaifanggenjinEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<BaifanggenjinEntity> wrapper) {
		  Page<BaifanggenjinView> page =new Query<BaifanggenjinView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<BaifanggenjinVO> selectListVO(Wrapper<BaifanggenjinEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public BaifanggenjinVO selectVO(Wrapper<BaifanggenjinEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<BaifanggenjinView> selectListView(Wrapper<BaifanggenjinEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public BaifanggenjinView selectView(Wrapper<BaifanggenjinEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
