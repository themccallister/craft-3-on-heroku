!function(a){Craft.QuickPostWidget=Garnish.Base.extend({params:null,initFields:null,$widget:null,$form:null,$formClone:null,$spinner:null,$errorList:null,loading:!1,init:function(b,c,d){this.params=c,this.initFields=d,this.$widget=a("#widget"+b);var e=this.$widget.find("form:first");this.$formClone=e.clone(),this.initForm(e)},initForm:function(a){this.$form=a,this.$spinner=this.$form.find(".spinner"),this.initFields();var b=this.$form.find("> .buttons > .btngroup > .menubtn"),c=b.next().find("> ul > li > a");b.menubtn(),this.addListener(this.$form,"submit","handleFormSubmit"),this.addListener(c,"click","saveAndContinueEditing")},handleFormSubmit:function(b){b.preventDefault(),this.save(a.proxy(this,"onSave"))},saveAndContinueEditing:function(){this.save(a.proxy(this,"gotoEntry"))},save:function(b){if(!this.loading){this.loading=!0,this.$spinner.removeClass("hidden");var c=Garnish.getPostData(this.$form),d=a.extend({enabled:1},c,this.params);Craft.postActionRequest("entries/save-entry",d,a.proxy(function(c,d){if(this.loading=!1,this.$spinner.addClass("hidden"),this.$errorList&&this.$errorList.children().remove(),"success"==d)if(c.success)Craft.cp.displayNotice(Craft.t("Entry saved.")),b(c);else if(Craft.cp.displayError(Craft.t("Couldn’t save entry.")),c.errors){this.$errorList||(this.$errorList=a('<ul class="errors"/>').insertAfter(this.$form));for(var e in c.errors)for(var f=0;f<c.errors[e].length;f++){var g=c.errors[e][f];a("<li>"+g+"</li>").appendTo(this.$errorList)}}},this))}},onSave:function(a){var b=this.$formClone.clone();if(this.$form.replaceWith(b),this.initForm(b),"undefined"!=typeof Craft.RecentEntriesWidget)for(var c=0;c<Craft.RecentEntriesWidget.instances.length;c++){var d=Craft.RecentEntriesWidget.instances[c];d.params.sectionId&&d.params.sectionId!=this.params.sectionId||d.addEntry({url:a.cpEditUrl,title:a.title,postDate:a.postDate,username:a.author.username})}},gotoEntry:function(a){Craft.redirectTo(a.cpEditUrl)}})}(jQuery);
//# sourceMappingURL=QuickPostWidget.js.map