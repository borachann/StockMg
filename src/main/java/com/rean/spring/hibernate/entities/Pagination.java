package com.rean.spring.hibernate.entities;

public class Pagination {
	private int currentPage;
	private int perPage;
	private Long totalCount;
	private int totalPages;
	
	public Pagination(){
		this(1,15,0L,0);
	}

	public Pagination(int currentPage, int perPage, Long totalCount, int totalPages) {
		super();
		this.currentPage = currentPage;
		this.perPage = perPage;
		this.totalCount = totalCount;
		this.totalPages = totalPages;
	}
	
	public int totalPages(){
		totalPages = (int) Math.ceil((double)this.totalCount/perPage);
		return totalPages;
	}

	public int nextPage(){
		return this.currentPage+1;
	}
	
	public int previousPage(){
		return this.currentPage-1;
	}
	
	public boolean hasNextPage(){
		return this.nextPage() <=this.totalPages()? true :false;
	}
	
	public boolean hasPreviousPage(){
		return this.previousPage()>=1 ? true : false;
	}
	
	public int offset(){
		return ((this.currentPage-1) * this.perPage);
	}
	
	// ======================== setter and getter ===================================
	
	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getPerPage() {
		return perPage;
	}

	public void setPerPage(int perPage) {
		this.perPage = perPage;
	}

	public Long getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(Long totalCount) {
		this.totalCount = totalCount;
	}

	public int getTotalPages() {
		return totalPages;
	}

	public void setTotalPages(int totalPages) {
		this.totalPages = totalPages;
	}

 

}
