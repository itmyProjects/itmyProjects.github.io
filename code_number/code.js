alert("O‘zbekistonda barcha telefon raqamlari “7 raqamli” tizimdan “9 raqamli” tizimga o‘tkaziladi")
    alert("Bu sizga “7 raqamli” tizimdan “9 raqamli” tizimga moslashingiz uchun yordam beradi")
    var app = new Vue({
      el: '#app',
      data: {
        number: '',
        code: '',
        num : ''
      },
      watch: {
        number: function() {
          this.code = ''
          this.num = this.number.substring(0,3)
          if (this.num.length == 3  ) {
            this.lookupCode()
          }
        },
      },
      methods: {
        lookupCode: _.debounce(function(){
          var app = this
          app.code = "Searching..."
          if(this.num==805||this.num==	122	||	this.num==	123	||	this.num==	124		||	this.num==	126	||	this.num==	127	||	this.num==	128	||	this.num==	129	||	this.num==	130	||	this.num==	131	||	this.num==	132	||	this.num==	133	||	this.num==	134	||	this.num==	135	||	this.num==	136	||	this.num==	137	||	this.num==	138	||	this.num==	139	||this.num==	174	||	this.num==	175	||	this.num==	176	||	this.num==	177	||	this.num==	178	||this.num==	185	||	this.num==	186	||	this.num==	187	||	this.num==	188	||	this.num==	189	||this.num==	315	||	this.num==	316	||	this.num==	317	||	this.num==	318	||	this.num==	319	||	this.num==	320	||	this.num==	321	||	this.num==	322	||	this.num==	323	||	this.num==	324	||	this.num==	325	||	this.num==	326	||	this.num==	327	||	this.num==	328	||	this.num==	329	||this.num==	345	||	this.num==	346	||	this.num==	347	||	this.num==	348	||	this.num==	349	||	this.num==	350	||	this.num==	351	||	this.num==	352	||	this.num==	353	||	this.num==	354	||	this.num==	355	||	this.num==	356	||	this.num==	357	||	this.num==	358	||	this.num==	359	||this.num==	370	||	this.num==	371	||	this.num==	372	||	this.num==	373	||	this.num==	374	||this.num==	900	||	this.num==	901	||	this.num==	902	||	this.num==	903	||	this.num==	904	||	this.num==	905	||	this.num==	906	||	this.num==	907	||	this.num==	908	||	this.num==	909	||	this.num==	910	||	this.num==	911	||	this.num==	912	||	this.num==	913	||	this.num==	914	||	this.num==	915	||	this.num==	916	||	this.num==	917	||	this.num==	918	||	this.num==	919	||	this.num==	920	||	this.num==	921	||	this.num==	922	||	this.num==	923	||	this.num==	924	||	this.num==	925	||	this.num==	926	||	this.num==	927	||	this.num==	928	||	this.num==	929	||	this.num==	930	||	this.num==	931	||	this.num==	932	||	this.num==	933	||	this.num==	934	||	this.num==	935	||	this.num==	936	||	this.num==	937	||	this.num==	938	||	this.num==	939	||	this.num==	940	||	this.num==	941	||	this.num==	942	||	this.num==	943	||	this.num==	944	||	this.num==	945	||	this.num==	946	||	this.num==	947	||	this.num==	948	||	this.num==	949	||	this.num==	950	||	this.num==	951	||	this.num==	952	||	this.num==	953	||	this.num==	954	||	this.num==	955	||	this.num==	956	||	this.num==	957	||	this.num==	958	||	this.num==	959	||	this.num==	960	||	this.num==	961	||	this.num==	962	||	this.num==	963	||	this.num==	964	||	this.num==	965	||	this.num==	966	||	this.num==	967	||	this.num==	968	||	this.num==	969	||	this.num==	970	||	this.num==	971	||	this.num==	972	||	this.num==	973	||	this.num==	974	||	this.num==	975	||	this.num==	976	||	this.num==	977	||	this.num==	978	||	this.num==	979	||	this.num==	980	||	this.num==	981	||	this.num==	982	||	this.num==	983	||	this.num==	984	||	this.num==	985	||	this.num==	986	||	this.num==	987	||	this.num==	988	||	this.num==	989	||	this.num==	990	||	this.num==	991	||	this.num==	992	||	this.num==	993	||	this.num==	994	||	this.num==	995	||	this.num==	996	||	this.num==	997	||	this.num==	998	||	this.num==	999	||this.num==	162	||	this.num==	163	||	this.num==	164	||	this.num==	165	||	this.num==	166	||this.num==	190	||	this.num==	191	||	this.num==	192	 ){
            this.code='Beeline +998 90 '+this.number
            return code
          }
          if(this.num==	375	||	this.num==	376	||	this.num==	377	||	this.num==	378	||	this.num==	379 || this.num==	384	||	this.num==	385	||	this.num==	386	|| this.num==	391	||	this.num==	392	||	this.num==	393	||	this.num==	394	||	this.num==	395	||	this.num==	396	||this.num==	506	||	this.num==	507	||	this.num==	508	||	this.num==	509	||	this.num==	510	||	this.num==	511	||	this.num==	512	||	this.num==	513	||	this.num==	514	||	this.num==	515	||	this.num==	516	||	this.num==	517	||	this.num==	518	||	this.num==	519	||	this.num==	520	|| this.num==	527	||	this.num==	528	||	this.num==	529	||	this.num==	530	||	this.num==	531	||	this.num==	532	||	this.num==	533	||	this.num==	534	||	this.num==	535	||	this.num==	536	||	this.num==	537	||	this.num==	538	||	this.num==	539	||	this.num==	540	||	this.num==	541	||	this.num==	542	||	this.num==	543	||	this.num==	544	||	this.num==	545	||	this.num==	546	||	this.num==	547	||	this.num==	548	||	this.num==	549	|| this.num==	551	||	this.num==	552	||	this.num==	553	||	this.num==	554	||	this.num==	555	||	this.num==	556	||	this.num==	557	||	this.num==	558	||	this.num==	559||	this.num==	564||(this.num<601)&&this.num>700){
            this.code='Ucell +998 93 '+this.number
            return code
          }
          if((this.num>122 && this.num<129)||(this.num>301 && this.num<315)||(this.num>361 && this.num<370)){
            this.code='Perfectum +998 98 '+this.number
            return code
          }
          if((this.num>143 && this.num<146)||(this.num>1194 && this.num<201)||(this.num>803 && this.num<805)||	this.num==	807||	this.num==	811||	this.num==	880||	this.num==	838||	this.num==	833 || this.num==830|| this.num==828|| this.num==826 ){
            this.code='UzMobile +998 95 '+this.number
            return code
          }
          if ((this.num>156 && this.num<158)||(this.num>401 && this.num<405)||(this.num>431 && this.num<500)||(this.num>701 && this.num<785)||	this.num==343||	this.num==130||	this.num==131||	this.num==330||	this.num==333||	this.num==343||	this.num==414||	this.num==420||	this.num==422||	this.num==424){
            this.code='UMS +998 97 '+this.number
            return  code
          }
          else{
              this.code='Syntax Error or Not in the Datebase yet Please if Some Huge Problem Contact Me 98 125 17 39'
              alert("if Some Huge Problem Contact Me 98 125 17 39")
          }
        },500
      )},
    })