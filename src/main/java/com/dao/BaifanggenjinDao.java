package com.dao;

import com.entity.BaifanggenjinEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.BaifanggenjinVO;
import com.entity.view.BaifanggenjinView;


/**
 * 拜访跟进
 * 
 * @author 
 * @email 
 * @date 2023-03-03 20:21:29
 */
public interface BaifanggenjinDao extends BaseMapper<BaifanggenjinEntity> {
	
	List<BaifanggenjinVO> selectListVO(@Param("ew") Wrapper<BaifanggenjinEntity> wrapper);
	
	BaifanggenjinVO selectVO(@Param("ew") Wrapper<BaifanggenjinEntity> wrapper);
	
	List<BaifanggenjinView> selectListView(@Param("ew") Wrapper<BaifanggenjinEntity> wrapper);

	List<BaifanggenjinView> selectListView(Pagination page,@Param("ew") Wrapper<BaifanggenjinEntity> wrapper);
	
	BaifanggenjinView selectView(@Param("ew") Wrapper<BaifanggenjinEntity> wrapper);
	

}
