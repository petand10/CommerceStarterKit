//>>built
define("epi-cms/widget/ContentSearchBox",["dojo/_base/declare","dojo/_base/lang","dojo/_base/event","dojo/aspect","dojo/Evented","dojo/keys","dojo/dom-attr","dojo/dom-style","epi/shell/widget/SuggestionBox","epi-cms/widget/SearchResultList","epi/i18n!epi/cms/nls/episerver.cms.widget.contentlist"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b){return _1([_9,_5],{res:_b,autoComplete:false,dropDownClass:_a,queryExpr:"${0}",minimumNumberOfChar:1,postCreate:function(){this.inherited(arguments);this.searchDelay=this.defaultDelay;this.on("beforeSearch",_2.hitch(this,function(){if(this.dropDown){this.dropDown.showStandby(true);}}));this.on("searchComplete",_2.hitch(this,function(_c){if(this.dropDown){this.dropDown.showStandby(false);}}));_4.before(this,"_startSearch",function(_d,_e){this.emit("beforeSearch",{});return [_d,_e];});},_openResultList:function(_f,_10,_11){this.emit("searchComplete",_f);this._fetchHandle=null;this.dropDown.clearResultList();var _12=_f.length>0||_11.start!==0;this.dropDown.showErrorMessage(!_12,this.res.contentnotfound);this.dropDown.showGrid(_12);if(_12){this.dropDown.createOptions(_f,_11,_2.hitch(this,"_getMenuLabelFromItem"));}this._showResultList();},_onDropDownMouseDown:function(e){e.stopPropagation();},_onKey:function(evt){switch(evt.keyCode){case _6.ENTER:if(this.dropDown&&this.dropDown.selected){this.dropDown.handleKey(evt);this.closeDropDown();}else{if(!this._fetchHandle){this._startSearchFromInput();_3.stop(evt);}}break;case _6.PAGE_DOWN:case _6.DOWN_ARROW:case _6.PAGE_UP:case _6.UP_ARROW:if(this.dropDown){this.dropDown.handleKey(evt);}_3.stop(evt);break;case _6.LEFT_ARROW:case _6.RIGHT_ARROW:break;default:this.inherited(arguments);}},_startSearchFromInput:function(){var key=this.focusNode.value;if(!key||key.length<this.minimumNumberOfChar){this.closeDropDown();return;}if(!this.dropDown){var _13=this.id+"_popup",_14=_2.isString(this.dropDownClass)?_2.getObject(this.dropDownClass,false):this.dropDownClass;this.dropDown=new _14({id:_13,dir:this.dir,textDir:this.textDir});_7.remove(this.textbox,"aria-activedescendant");_7.set(this.textbox,"area-owns",_13);this.dropDown.on("select",_2.hitch(this,function(_15){this.closeDropDown();this.emit("select",_15);}));_8.set(this.dropDown.domNode,"width",this.textbox.clientWidth+"px");}this._showResultList();var _16=key.replace(new RegExp("\\W+"),"").length===0;this.dropDown.showErrorMessage(_16,this.res.notsearchspecialcharacter);if(!_16){this._startSearch(key);}},_startSearchAll:function(){}});});