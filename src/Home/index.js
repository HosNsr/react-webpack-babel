import React, { Component } from 'react'

export default class Home extends Component {

	render() {
		return (
			<section id="main-content">
				<section className="wrapper">
					<div className="row state-overview">
						<div className="col-lg-3 col-sm-6">
							<section className="panel">
								<div className="symbol terques">
									<i className="icon-user"></i>
								</div>
								<div className="value">
									<h1>22</h1>
									<p>کاربر جدید</p>
								</div>
							</section>
						</div>
						<div className="col-lg-3 col-sm-6">
							<section className="panel">
								<div className="symbol red">
									<i className="icon-tags"></i>
								</div>
								<div className="value">
									<h1>140</h1>
									<p>فروش</p>
								</div>
							</section>
						</div>
						<div className="col-lg-3 col-sm-6">
							<section className="panel">
								<div className="symbol yellow">
									<i className="icon-shopping-cart"></i>
								</div>
								<div className="value">
									<h1>345</h1>
									<p>سفارش جدید</p>
								</div>
							</section>
						</div>
						<div className="col-lg-3 col-sm-6">
							<section className="panel">
								<div className="symbol blue">
									<i className="icon-bar-chart"></i>
								</div>
								<div className="value">
									<h1>34,500</h1>
									<p>سود خالص</p>
								</div>
							</section>
						</div>
					</div>
	
					<div className="row">
						<div className="col-lg-8">
							<div className="border-head">
								<h3>چارت ورودی</h3>
							</div>
							<div className="custom-bar-chart">
								<div className="bar">
									<div className="title">فروردین</div>
									<div className="value tooltips" data-original-title="80%" data-toggle="tooltip" data-placement="top">80%</div>
								</div>
								<div className="bar doted">
									<div className="title">اردیبهشت</div>
									<div className="value tooltips" data-original-title="50%" data-toggle="tooltip" data-placement="top">50%</div>
								</div>
								<div className="bar ">
									<div className="title">خرداد</div>
									<div className="value tooltips" data-original-title="40%" data-toggle="tooltip" data-placement="top">40%</div>
								</div>
								<div className="bar doted">
									<div className="title">تیر</div>
									<div className="value tooltips" data-original-title="55%" data-toggle="tooltip" data-placement="top">55%</div>
								</div>
								<div className="bar">
									<div className="title">مرداد</div>
									<div className="value tooltips" data-original-title="20%" data-toggle="tooltip" data-placement="top">20%</div>
								</div>
								<div className="bar doted">
									<div className="title">شهریور</div>
									<div className="value tooltips" data-original-title="39%" data-toggle="tooltip" data-placement="top">39%</div>
								</div>
								<div className="bar">
									<div className="title">مهر</div>
									<div className="value tooltips" data-original-title="75%" data-toggle="tooltip" data-placement="top">75%</div>
								</div>
								<div className="bar doted">
									<div className="title">آبان</div>
									<div className="value tooltips" data-original-title="45%" data-toggle="tooltip" data-placement="top">45%</div>
								</div>
								<div className="bar ">
									<div className="title">آذر</div>
									<div className="value tooltips" data-original-title="50%" data-toggle="tooltip" data-placement="top">50%</div>
								</div>
								<div className="bar doted">
									<div className="title">دی</div>
									<div className="value tooltips" data-original-title="42%" data-toggle="tooltip" data-placement="top">42%</div>
								</div>
								<div className="bar ">
									<div className="title">بهمن</div>
									<div className="value tooltips" data-original-title="60%" data-toggle="tooltip" data-placement="top">60%</div>
								</div>
								<div className="bar doted">
									<div className="title">اسفند</div>
									<div className="value tooltips" data-original-title="90%" data-toggle="tooltip" data-placement="top">90%</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="panel terques-chart">
								<div className="panel-body chart-texture">
									<div className="chart">
										<div className="heading">
											<span>جمعه</span>
											<strong>ريال 570000 | 15%</strong>
										</div>
										<div className="sparkline" data-type="line" data-resize="true" data-height="75" data-width="90%" data-line-width="1" data-line-color="#fff" data-spot-color="#fff" data-fill-color="" data-highlight-line-color="#fff" data-spot-radius="4" data-data="[200,135,667,333,526,996,564,123,890,564,455]"></div>
									</div>
								</div>
								<div className="chart-tittle">
									<span className="title">ورودی ها</span>
									<span className="value">
										<a href="#" className="active">فروش</a>
										|
										<a href="#">بازگشتی</a>
										|
										<a href="#">آنلاین</a>
									</span>
								</div>
							</div>
							<div className="panel green-chart">
								<div className="panel-body">
									<div className="chart">
										<div className="heading">
											<span>مهر</span>
											<strong>23 روز | 65%</strong>
										</div>
										<div id="barchart"></div>
									</div>
								</div>
								<div className="chart-tittle">
									<span className="title">درآمد کل</span>
									<span className="value">ريال, 76،54،678</span>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<section className="panel">
								<div className="panel-body">
									<a href="#" className="task-thumb">
										<img src="../assets/img/avatar1.jpg" alt="" />
									</a>
									<div className="task-thumb-details">
										<h1><a href="#">Anjelina Joli</a></h1>
										<p>Senior Architect</p>
									</div>
								</div>
								<table className="table table-hover personal-task">
									<tbody>
									<tr>
										<td>
											<i className=" icon-tasks"></i>
										</td>
										<td>New Task Issued</td>
										<td> 02</td>
									</tr>
									<tr>
										<td>
											<i className="icon-warning-sign"></i>
										</td>
										<td>Task Pending</td>
										<td> 14</td>
									</tr>
									<tr>
										<td>
											<i className="icon-envelope"></i>
										</td>
										<td>Inbox</td>
										<td> 45</td>
									</tr>
									<tr>
										<td>
											<i className=" icon-bell-alt"></i>
										</td>
										<td>New Notification</td>
										<td> 09</td>
									</tr>
									</tbody>
								</table>
							</section>
						</div>
						<div className="col-lg-8">
							<section className="panel">
								<div className="panel-body progress-panel">
									<div className="task-progress">
										<h1>Work Progress</h1>
										<p>Anjelina Joli</p>
									</div>
									<div className="task-option">
										<select className="styled">
											<option>Anjelina Joli</option>
											<option>Tom Crouse</option>
											<option>Jhon Due</option>
										</select>
									</div>
								</div>
								<table className="table table-hover personal-task">
									<tbody>
									<tr>
										<td>1</td>
										<td>
											Target Sell
										</td>
										<td>
											<span className="badge bg-important">75%</span>
										</td>
										<td>
										<div id="work-progress1"></div>
										</td>
									</tr>
									<tr>
										<td>2</td>
										<td>
											Product Delivery
										</td>
										<td>
											<span className="badge bg-success">43%</span>
										</td>
										<td>
											<div id="work-progress2"></div>
										</td>
									</tr>
									<tr>
										<td>3</td>
										<td>
											Payment Collection
										</td>
										<td>
											<span className="badge bg-info">67%</span>
										</td>
										<td>
											<div id="work-progress3"></div>
										</td>
									</tr>
									<tr>
										<td>4</td>
										<td>
											Work Progress
										</td>
										<td>
											<span className="badge bg-warning">30%</span>
										</td>
										<td>
											<div id="work-progress4"></div>
										</td>
									</tr>
									<tr>
										<td>5</td>
										<td>
											Delivery Pending
										</td>
										<td>
											<span className="badge bg-primary">15%</span>
										</td>
										<td>
											<div id="work-progress5"></div>
										</td>
									</tr>
									</tbody>
								</table>
							</section>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-8">
							<section className="panel">
								<div className="panel-body">
										<div className="text-center mbot30">
											<h3 className="timeline-title">Timeline</h3>
											<p className="t-info">This is a project timeline</p>
										</div>
	
										<div className="timeline">
											<article className="timeline-item">
												<div className="timeline-desk">
													<div className="panel">
														<div className="panel-body">
															<span className="arrow"></span>
															<span className="timeline-icon red"></span>
															<span className="timeline-date">08:25 am</span>
															<h1 className="red">12 July | Sunday</h1>
															<p>Lorem ipsum dolor sit amet consiquest dio</p>
														</div>
													</div>
												</div>
											</article>
											<article className="timeline-item alt">
												<div className="timeline-desk">
													<div className="panel">
														<div className="panel-body">
															<span className="arrow-alt"></span>
															<span className="timeline-icon green"></span>
															<span className="timeline-date">10:00 am</span>
															<h1 className="green">10 July | Wednesday</h1>
															<p><a href="#">Jonathan Smith</a> added new milestone <span><a href="#" className="green">ERP</a></span></p>
														</div>
													</div>
												</div>
											</article>
											<article className="timeline-item">
												<div className="timeline-desk">
													<div className="panel">
														<div className="panel-body">
															<span className="arrow"></span>
															<span className="timeline-icon blue"></span>
															<span className="timeline-date">11:35 am</span>
															<h1 className="blue">05 July | Monday</h1>
															<p><a href="#">Anjelina Joli</a> added new album <span><a href="#" className="blue">PARTY TIME</a></span></p>
															<div className="album">
																<a href="#">
																	<img alt="" src="../assets/img/sm-img-1.jpg" />
																</a>
																<a href="#">
																	<img alt="" src="../assets/img/sm-img-2.jpg" />
																</a>
																<a href="#">
																	<img alt="" src="../assets/img/sm-img-3.jpg" />
																</a>
																<a href="#">
																	<img alt="" src="../assets/img/sm-img-1.jpg" />
																</a>
																<a href="#">
																	<img alt="" src="../assets/img/sm-img-2.jpg" />
																</a>
															</div>
														</div>
													</div>
												</div>
											</article>
											<article className="timeline-item alt">
												<div className="timeline-desk">
													<div className="panel">
														<div className="panel-body">
															<span className="arrow-alt"></span>
															<span className="timeline-icon purple"></span>
															<span className="timeline-date">3:20 pm</span>
															<h1 className="purple">29 June | Saturday</h1>
															<p>Lorem ipsum dolor sit amet consiquest dio</p>
															<div className="notification">
																<i className=" icon-exclamation-sign"></i> New task added for <a href="#">Denial Collins</a>
															</div>
														</div>
													</div>
												</div>
											</article>
											<article className="timeline-item">
												<div className="timeline-desk">
													<div className="panel">
														<div className="panel-body">
															<span className="arrow"></span>
															<span className="timeline-icon light-green"></span>
															<span className="timeline-date">07:49 pm</span>
															<h1 className="light-green">10 June | Friday</h1>
															<p><a href="#">Jonatha Smith</a> added new milestone <span><a href="#" className="light-green">prank</a></span> Lorem ipsum dolor sit amet consiquest dio</p>
														</div>
													</div>
												</div>
											</article>
										</div>
	
										<div className="clearfix">&nbsp;</div>
									</div>
							</section>
						</div>
						<div className="col-lg-4">
							<section className="panel">
								<div className="revenue-head">
									<span>
										<i className="icon-bar-chart"></i>
									</span>
									<h3>Revenue</h3>
									<span className="rev-combo pull-right">
									June 2013
									</span>
								</div>
								<div className="panel-body">
									<div className="row">
										<div className="col-lg-6 col-sm-6 text-center">
											<div className="easy-pie-chart">
												<div className="percentage" data-percent="35"><span>35</span>%</div>
											</div>
										</div>
										<div className="col-lg-6 col-sm-6">
											<div className="chart-info chart-position">
												<span className="increase"></span>
												<span>Revenue Increase</span>
											</div>
											<div className="chart-info">
												<span className="decrease"></span>
												<span>Revenue Decrease</span>
											</div>
										</div>
									</div>
								</div>
								<div className="panel-footer revenue-foot">
									<ul>
										<li className="first active">
											<a href="javascript:;">
												<i className="icon-bullseye"></i>
												Graphical
											</a>
										</li>
										<li>
											<a href="javascript:;">
												<i className=" icon-th-large"></i>
												Tabular
											</a>
										</li>
										<li className="last">
											<a href="javascript:;">
												<i className=" icon-align-justify"></i>
												Listing
											</a>
										</li>
									</ul>
								</div>
							</section>
							<section className="panel">
								<div className="flat-carousal">
									<div id="owl-demo" className="owl-carousel owl-theme">
										<div className="item">
											<h1>Flatlab is new model of admin dashboard for happy use</h1>
											<div className="text-center">
												<a href="javascript:;" className="view-all">View All</a>
											</div>
										</div>
										<div className="item">
											<h1>Fully responsive and build with Bootstrap 3.0</h1>
											<div className="text-center">
												<a href="javascript:;" className="view-all">View All</a>
											</div>
										</div>
										<div className="item">
											<h1>Responsive Frontend is free if you get this.</h1>
											<div className="text-center">
												<a href="javascript:;" className="view-all">View All</a>
											</div>
										</div>
									</div>
								</div>
								<div className="panel-body">
									<ul className="ft-link">
										<li className="active">
											<a href="javascript:;">
												<i className="icon-reorder"></i>
												Sales
											</a>
										</li>
										<li>
											<a href="javascript:;">
												<i className=" icon-calendar-empty"></i>
												promo
											</a>
										</li>
										<li>
											<a href="javascript:;">
												<i className=" icon-camera"></i>
												photo
											</a>
										</li>
										<li>
											<a href="javascript:;">
												<i className=" icon-circle"></i>
												other
											</a>
										</li>
									</ul>
								</div>
							</section>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-8">
							<section className="panel post-wrap pro-box">
								<aside>
									<div className="post-info">
										<span className="arrow-pro right"></span>
										<div className="panel-body">
											<h1><strong>popular</strong> Brand of this week</h1>
											<div className="desk yellow">
												<h3>Dimond Ring</h3>
												<p>Lorem ipsum dolor set amet lorem ipsum dolor set amet ipsum dolor set amet</p>
											</div>
											<div className="post-btn">
												<a href="javascript:;">
													<i className="icon-chevron-sign-left"></i>
												</a>
												<a href="javascript:;">
													<i className="icon-chevron-sign-right"></i>
												</a>
											</div>
										</div>
									</div>
								</aside>
								<aside className="post-highlight yellow v-align">
									<div className="panel-body text-center">
										<div className="pro-thumb">
											<img src="../assets/img/ring.jpg" alt="" />
										</div>
									</div>
								</aside>
							</section>
							<section className="panel post-wrap pro-box">
								<aside className="post-highlight terques v-align">
									<div className="panel-body">
										<h2>Flatlab is new model of admin dashboard <a href="javascript:;"> http://demo.com/</a> 4 days ago  by jonathan smith</h2>
									</div>
								</aside>
								<aside>
									<div className="post-info">
										<span className="arrow-pro left"></span>
										<div className="panel-body">
											<div className="text-center twite">
												<h1>Twitter Feed</h1>
											</div>
	
											<footer className="social-footer">
												<ul>
													<li>
														<a href="#">
														<i className="icon-facebook"></i>
														</a>
													</li>
													<li className="active">
														<a href="#">
															<i className="icon-twitter"></i>
														</a>
													</li>
													<li>
														<a href="#">
															<i className="icon-google-plus"></i>
														</a>
													</li>
													<li>
														<a href="#">
															<i className="icon-pinterest"></i>
														</a>
													</li>
												</ul>
											</footer>
										</div>
									</div>
								</aside>
							</section>
						</div>
						<div className="col-lg-4">
							<div className="row">
								<div className="col-xs-6">
									<section className="panel">
										<div className="panel-body">
											<div className="chart">
												<div id="pie-chart" ></div>
											</div>
										</div>
										<footer className="pie-foot">
											Free: 260GB
										</footer>
									</section>
								</div>
								<div className="col-xs-6">
									<section className="panel">
										<div className="follower">
											<div className="panel-body">
												<h4>Jonathan Smith</h4>
												<div className="follow-ava">
													<img src="../assets/img/follower-avatar.jpg" alt="" />
												</div>
											</div>
										</div>
	
										<footer className="follower-foot">
											<ul>
												<li>
													<h5>2789</h5>
													<p>Follower</p>
												</li>
												<li>
													<h5>270</h5>
													<p>Following</p>
												</li>
											</ul>
										</footer>
									</section>
								</div>
							</div>
							<section className="panel">
								<div className="weather-bg">
									<div className="panel-body">
										<div className="row">
											<div className="col-xs-6">
											<i className="icon-cloud"></i>
												California
											</div>
											<div className="col-xs-6">
												<div className="degree">
													24°
												</div>
											</div>
										</div>
									</div>
								</div>
	
								<footer className="weather-category">
									<ul>
										<li className="active">
											<h5>humidity</h5>
											56%
										</li>
										<li>
											<h5>precip</h5>
											1.50 in
										</li>
										<li>
											<h5>winds</h5>
											10 mph
										</li>
									</ul>
								</footer>
	
							</section>
						</div>
					</div>
	
				</section>
			</section>
		)
	}
}
