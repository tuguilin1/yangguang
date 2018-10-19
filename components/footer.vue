<template>
	<div class="footer">
        <dl class="update">
            <dt>获取更新</dt>
            <dd><a href="//www.juanpi.com/apps" target="_blank" rel="nofollow"><i></i>iPhone/Android</a></dd>
            <dd><a href="//user.qzone.qq.com/474171717" target="_blank" rel="nofollow"><i></i>卷皮QQ空间</a></dd>
            <dd><a href="//weibo.com/juanpicom" target="_blank" rel="nofollow"><i></i>卷皮新浪微博</a></dd>
            <dd><a href="//www.juanpi.com/about/api" target="_blank" rel="nofollow"><i></i>开放API</a></dd>
        </dl>
        <dl class="cooperation">
            <dt>商务合作</dt>
            <dd><a href="https://seller.juanpi.com/choice" target="_blank"><i></i>卖家免费报名</a></dd>
            <dd><a href="https://seller.juanpi.com/choice/welcome" target="_blank" rel="nofollow"><i></i>商家入驻</a></dd> 
            <dd><a onclick="if (window.confirm('本邮箱仅接收合作商家对卷皮员工违规行为的举报。不接受用户咨询、投诉或商务合作申请。')) { window.location = 'mailto:' + 'moc.ipnauj@gnehznail'.split('').reverse().join(''); }" href="javascript:void(0)"><i></i>廉政邮箱<br></a></dd>
            <dd><a href="http://open.juanpi.com" target="_blank" rel="nofollow"><i></i>开放平台</a></dd>
        </dl>
        <dl class="cor-info">
            <dt>公司信息</dt>
            <dd><a href="//www.juanpi.com/about/juanpi" target="_blank" rel="nofollow"><i></i>关于卷皮</a></dd>
            <dd><a href="//www.juanpi.com/about/media" target="_blank" rel="nofollow"><i></i>媒体报道</a></dd>
            <dd class="school"><a href="//hr.juanpi.com" target="_blank" rel="nofollow"><i></i>诚聘英才</a><a href="//hr.juanpi.com/recruit.html" target="_blank"><em></em></a></dd>
            <dd><a href="//www.juanpi.com/event/xiaoyuan_zhaomu" target="_blank" rel="nofollow"><i></i>校园经理招募</a></dd>
        </dl>
        <dl class="help-info">
            <dt>帮助中心</dt>
            <dd><a href="//www.juanpi.com/help" target="_blank" rel="nofollow"><i></i>新手上路</a></dd>
            <dd><a href="//www.juanpi.com/about/map" target="_blank"><i></i>网站地图</a></dd>
        </dl>
	</div>
</template>

<script type="text/javascript">
	
</script>

<style type="text/css" lang="less">
	.el-footer{
		padding: 0;
	}
	.footer{
		height: 200px;
		border-top:2px solid #ff464e;
		padding-left: 20%;
		padding-right: 20%;
		display: flex;
		justify-content: space-around;
		padding-top: 40px;
		dt{
			font-weight: bolder;
			margin-bottom: 20px;
		}
		dd{
			color:#EEE;
			margin-top: 5px;
		}
		a{
			color:#555;
		}
		dd:hover{
			text-decoration: underline;
		}
	}
</style>