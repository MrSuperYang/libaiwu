<template>
	<div class="personal_data">
		<div class="qcenterright">
			<div class="qcenterrighthead">
				<div>个人资料</div>

			</div>
			<!--6个div,每个一行-->
			<div style="" class="rcenterrightcenter">
				<div style="padding-top:20px;">
					当前头像:&nbsp;<span style="display:inline-block;width:80px;height:80px;border:1px solid red;margin-left:10px;"></span>&nbsp;<span style="color:#93bf8b;">修改</span>
				</div>
				<div style="padding-left:30px;">
					昵称: <input type="" name="" id="" value="" style="margin-left:20px;" />
				</div>
				<div style="padding-left:30px;">
					性别: <label for=""><input type="radio" name="" id="" value="男"  style="width:10px;height:10px;margin-left:20px;"/>男</label>
					<label for=""><input type="radio" name="" id=""  style="width:10px;height:10px;margin-left:40px;"/>女</label>
				</div>
				<div class="perBath">
				<span>生日:&nbsp;&nbsp; </span>&nbsp;&nbsp;
				<select id="form_dob_year" name="dob_year">
				    <!--<option value="-">-</option>-->
				    <option value="2017">2017</option>
				    <option value="2016">2016</option>
				    <option value="2015">2015</option>
				    <option value="2014">2014</option>
				    <option value="2013">2013</option>
				    <option value="2012">2012</option>
				    <option value="2011">2011</option>
				    <option value="2010">2010</option>
				    <option value="2009">2009</option>
				    <option value="2008">2008</option>
				    <option value="2007">2007</option>
				    <option value="2006">2006</option>
				    <option value="2005">2005</option>
				    <option value="2004">2004</option>
				    <option value="2003">2003</option>
				    <option value="2002">2002</option>
				    <option value="2001">2001</option>
				    <option value="2000">2000</option>
				    <option value="1999">1999</option>
				    <option value="1998">1998</option>
				    <option value="1997">1997</option>
				    <option value="1996">1996</option>
				    <option value="1995">1995</option>
				    <option value="1994">1994</option>
				    <option value="1993" selected="selected">1993</option>
				    <option value="1992">1992</option>
				    <option value="1991">1991</option>
				    <option value="1990">1990</option>
				    <option value="1989">1989</option>
				    <option value="1988">1988</option>
				    <option value="1987">1987</option>
				    <option value="1986">1986</option>
				    <option value="1985">1985</option>
				    <option value="1984">1984</option>
				    <option value="1983">1983</option>
				    <option value="1982">1982</option>
				    <option value="1981">1981</option>
				    <option value="1980">1980</option>
				    <option value="1979">1979</option>
				    <option value="1978">1978</option>
				    <option value="1977">1977</option>
				    <option value="1976">1976</option>
				    <option value="1975">1975</option>
				    <option value="1974">1974</option>
				    <option value="1973">1973</option>
				    <option value="1972">1972</option>
				    <option value="1971">1971</option>
				    <option value="1970">1970</option>
				    <option value="1969">1969</option>
				    <option value="1968">1968</option>
				    <option value="1967">1967</option>
				    <option value="1966">1966</option>
				    <option value="1965">1965</option>
				    <option value="1964">1964</option>
				    <option value="1963">1963</option>
				    <option value="1962">1962</option>
				    <option value="1961">1961</option>
				    <option value="1960">1960</option>
				    <option value="1959">1959</option>
				</select>
				&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;
				<select id="form_dob_month" name="dob_month">  
				    <option value="1">January</option>
				    <option value="2">Febuary</option>
				    <option value="3">March</option>
				    <option value="4">April</option>
				    <option value="5">May</option>
				    <option value="6">June</option>
				    <option value="7">July</option>
				    <option value="8">August</option>
				    <option value="9">September</option>
				    <option value="10" selected="selected">October</option>
				    <option value="11">November</option>
				    <option value="12">December</option>
				</select>
				&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;
				 <select id="form_dob_day" name="dob_day">
				    <option value="-">-</option>
				    <option value="1">1</option>
				    <option value="2">2</option>
				    <option value="3">3</option>
				    <option value="4">4</option>
				    <option value="5">5</option>
				    <option value="6">6</option>
				    <option value="7">7</option>
				    <option value="8">8</option>
				    <option value="9">9</option>
				    <option value="10" selected="selected">10</option>
				    <option value="11">11</option>
				    <option value="12">12</option>
				    <option value="13">13</option>
				    <option value="14">14</option>
				    <option value="15">15</option>
				    <option value="16">16</option>
				    <option value="17">17</option>
				    <option value="18">18</option>
				    <option value="19">19</option>
				    <option value="20">20</option>
				    <option value="21">21</option>
				    <option value="22">22</option>
				    <option value="23">23</option>
				    <option value="24">24</option>
				    <option value="25">25</option>
				    <option value="26">26</option>
				    <option value="27">27</option>
				    <option value="28">28</option>
				    <option value="29">29</option>
				    <option value="30">30</option>
				    <option value="31">31</option>
				</select>
				&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;
			</div>
	
				<div style="padding-left:30px;">
					手机: <input type="text" name="" id="" value="" style="margin-left:20px;background-color:#f4f4f4;" />
					<span style="color:#4b943d;margin-left: 25px;">更换手机</span>
				</div>
				<div>
					<span class="rcenterrightcenterfoot"><router-link to="/person/Bindphone">确认提交</router-link></span> </div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'personal_data'
	}
</script>

<style scoped>
	h4 {
		font-size: 18px;
	}
	
	.qcenterright {
		width: 1086px;
		height: 625px;
		border: 1px solid lightgray;
	}
	
	.qcenterrighthead {
		height: 60px;
		line-height: 60px;
		position: relative;
		border-bottom: 1px solid lightgray;
		padding-left: 20px;
	}
	
	.rcenterrightcenter {
		padding-left: 20px;
	}
	
	.rcenterrightcenter div {
		display: flex;
		align-items: center;
		margin-top: 20px;
		margin-left: 20px;
	}
	
	.rcenterrightcenter input {
		display: inline-block;
		width: 172px;
		height: 35px;
	}
	/*.rcenterrightcenterfoot{display:inline-block; background-color:#f08200;width:150px;height:50px;border-radius:5px;color:white;font-size:21px;line-height:50px;margin-top:40px;text-align:center;}*/
	
	.rcenterrightcenterfoot {
		display: inline-block;
		background-color: #f08200;
		width: 150px;
		height: 50px;
		border-radius: 5px;
		color: white;
		display: flex;
		justify-content: center;
		line-height: 50px;
		margin-left: 85px;
	}
	.perBath select{
			appearance:none;
	-moz-appearance:none;
	-webkit-appearance:none;
				 background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat 		scroll right center transparent;
				  padding-right: 14px;
			}
			.perBath{padding-left:30px;}
</style>