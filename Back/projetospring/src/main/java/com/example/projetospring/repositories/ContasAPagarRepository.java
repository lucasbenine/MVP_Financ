package com.example.projetospring.repositories;

import com.example.projetospring.model.ContasAPagar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContasAPagarRepository extends JpaRepository<ContasAPagar, Long> {

}
