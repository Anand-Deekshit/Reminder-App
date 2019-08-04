package com.boot.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.boot.model.MaxIdTable;

@Repository
public interface IdRepository extends JpaRepository<MaxIdTable, String>{
	
	@Query("select m.val from maxidtable m where m.id = ?1")
	public int getMaxId(String paramId);
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("update maxidtable m set m.val =:value where m.id=:paramid")
	public int updateMaxIds(@Param("paramid") String paramId,@Param("value") int newId);

}
