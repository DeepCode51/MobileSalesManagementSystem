package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.BaifanggenjinEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.BaifanggenjinVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.BaifanggenjinView;


/**
 * 拜访跟进
 *
 * @author 
 * @email 
 * @date 2023-03-03 20:21:29
 */
public interface BaifanggenjinService extends IService<BaifanggenjinEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<BaifanggenjinVO> selectListVO(Wrapper<BaifanggenjinEntity> wrapper);
   	
   	BaifanggenjinVO selectVO(@Param("ew") Wrapper<BaifanggenjinEntity> wrapper);
   	
   	List<BaifanggenjinView> selectListView(Wrapper<BaifanggenjinEntity> wrapper);
   	
   	BaifanggenjinView selectView(@Param("ew") Wrapper<BaifanggenjinEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<BaifanggenjinEntity> wrapper);
   	

}

