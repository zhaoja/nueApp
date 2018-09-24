<template>
	<div class="statistics img-bg1">
		<div class="vbchain">
			<div class="title">
				<p>9,991,124</p>
				<p>加入保障计划用户数</p>
			</div>
			<ul class="mui-table-view community">
				<li class="mui-table-view-cell mui-media">
					<h4>性别统计</h4>
					<div class="chart" id="pieChart" style="width: 100%;height: 160px;"></div>
				</li>
				<li class="mui-table-view-cell mui-media">
					<h4>年龄统计</h4>
					<div class="chart" id="barChart" style="width: 100%;height: 170px;"></div>
				</li>
				<li class="mui-table-view-cell mui-media">
					<h4>常见问题</h4>
					<ul class="mui-table-view">
						<li class="mui-table-view-cell mui-collapse mui-active">
							<a class="mui-navigate-right" href="jacascript::void(0)">什么是INU区块链保障计划</a>
							<div class="mui-collapse-content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin
								</p>
							</div>
						</li>
						<li class="mui-table-view-cell mui-collapse">
							<a class="mui-navigate-right" href="jacascript::void(0)">INU生命互助的优势</a>
							<div class="mui-collapse-content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin
								</p>
							</div>
						</li>
						<li class="mui-table-view-cell mui-collapse">
							<a class="mui-navigate-right" href="jacascript::void(0)">加入INU保障计划可以获得什么</a>
							<div class="mui-collapse-content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin
								</p>
							</div>
						</li>
					</ul>
				</li>
			</ul>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},

		created() {
//			this.$store.dispatch("getTitle", "查看区块链")
		},
		mounted() {
			this.draw();
		},
		methods: {
			draw() {
				// 基于准备好的dom，初始化echarts实例
				let pieChart = this.$echarts.init(document.getElementById('pieChart'))
				let barChart = this.$echarts.init(document.getElementById('barChart'))
				// 绘制图表
				let seriesData = {
					normalh: {
						borderWidth: 7,
						barBorderRadius: 10,
						shadowColor: 'rgba(0,0,0,0.2)',
						shadowBlur: 10,
						shadowOffsetX: 2,
						shadowOffsetY: 2,
						borderColor: new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [{
							offset: 0,
							color: '#70E0FF'
						}, {
							offset: 0.5,
							color: '#53A3FB'
						}, {
							offset: 1,
							color: '#2E84F7'
						}])

					},
					normalw: {
						borderWidth: 7,
						barBorderRadius: 10,
						shadowColor: 'rgba(0,0,0,0.2)',
						shadowBlur: 10,
						shadowOffsetX: 2,
						shadowOffsetY: 2,
						borderColor: new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [{
							offset: 0,
							color: '#FFDF5B'
						}, {
							offset: 0.5,
							color: '#FFA546'
						}, {
							offset: 1,
							color: '#FE662D'
						}])
					},
					radiusData: ["75%", "85%"],
					label: {
						normal: {
							position: 'center'
						}
					},
					data: {
						label: {
							normal: {
								formatter: function(params) {
									return(100 - params.percent) + '%'
								},
								textStyle: {
									fontSize: 18,
									fontWeight: 600,
									color: "#000"

								}
							}
						},
						itemStyle: {
							normal: {
								color: "#E9E9E9"
							},
							emphasis: {
								color: "#E9E9E9"
							}
						},
						textStyleSmall: {
							fontSize: 14,
							color: '#777'
						}
					}
				}

				pieChart.setOption({
					title: false,
					series: [{
						name: '性别统计',
						type: 'pie',
						center: ['25.0%', '50%'],
						radius: seriesData.radiusData,
						clockWise: false,
						label: seriesData.label,
						hoverAnimation: false,
						data: [{
							value: 45,
							label: seriesData.data.label,
							itemStyle: seriesData.data.itemStyle
						}, {
							value: 55,
							name: '男',
							label: {
								normal: {
									formatter: '\男',
									textStyle: seriesData.data.textStyleSmall
								},
								emphasis: {
									formatter: '\男',
									textStyle: seriesData.data.textStyleSmall
								}
							},
							itemStyle: {
								normal: seriesData.normalh,
								emphasis: seriesData.normalh
							}

						}]
					}, {
						name: '',
						type: 'pie',
						center: ['75.0%', '50%'],
						radius: seriesData.radiusData,
						color: '#473C8B',
						label: seriesData.label,
						clockWise: false,
						hoverAnimation: false,
						data: [{
							value: 55,
							label: seriesData.data.label,
							itemStyle: seriesData.data.itemStyle
						}, {
							value: 45,
							name: '女',
							label: {
								normal: {
									formatter: '\女',
									textStyle: seriesData.data.textStyleSmall
								},
								emphasis: {
									formatter: '\女',
									textStyle: seriesData.data.textStyleSmall
								}
							},
							itemStyle: {
								normal: seriesData.normalw,
								emphasis: seriesData.normalw
							},
						}]

					}]
				});
				barChart.setOption({
					title: "",
					tooltip: {},
					grid: {
						x: 60,
						y: 0,
						x2: 0,
						y2: 20
					},
					yAxis: {
						axisLabel: {
							show: true,
							interval: 0,
							rotate: 0,
							margin: 10,
							inside: false,
							textStyle: {
								color: '#6195FF',
								fontWeight: '50'
							}
						},
						axisTick: {
							show: false, //隐藏Y轴刻度
						},
						axisLine: {
							show: false, //隐藏Y轴线段
						},
						data: ["0-10", "10-20", "20-30", "30-40", "40-50", "50-65"]
					},
					xAxis: {
						show: false,
						type: 'value',
					},
					series: [{
						name: '年龄统计',
						type: 'bar',
						barWidth: 8,
						itemStyle: {
							normal: {
								barBorderRadius: 10,
								color: new this.$echarts.graphic.LinearGradient(
									1, 0, 0, 0, [{
											offset: 1,
											color: '#70E0FF'
										},
										{
											offset: 0.5,
											color: '#53A3FB'
										},
										{
											offset: 0,
											color: '#2E84F7'
										}
									]
								),
								shadowColor: 'rgba(0,0,0,0.2)',
								shadowBlur: 10,
								shadowOffsetX: 5,
								shadowOffsetY: 5
							}
						},
						data: [5, 20, 36, 10, 10, 20]
					}]
				});
			}
		}
	}
</script>
