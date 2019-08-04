package com.boot.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

public interface IdRepositoryCustom {

	@Query("select m.val from maxidtable m where m.id = ?1")
	public int getMaxId(String paramId);

	public int updateMaxIds(String paramId, int newId);
}
