// JavaScript Document
$(function(){


			ajaxLoading();			

			//Button
				$(".doAction button:first").button({
				icons: {
					primary: 'ui-icon-disk'
				}			
				}).click( function() {
					$('#doAction').val('Save');
					
					var options = { 					 
						url : './modules/Admin/docs_auth_code.php',
						type : 'post',						
						success: function(data){
							$('#divMsg').html(' บันทึกข้อมูลเรียบร้อย !!').fadeIn();							
							//$('#divMsg').html(data).fadeIn();
						},// post-submit callback 
						 complete: function(){
							 $('#divMsg').fadeOut(2000);
							setTimeout("window.location.reload(true)",2000);						
						 }
					}; 
				 
					// bind to the form's submit event 
					$('#form_docs_auth').submit(function() { 
						$(this).ajaxSubmit(options); 
						return false; 
					}); 
					
				})
					//.buttonset();	
				
				
				// เลือกเมนู
				$('#group_id').change(function(){
					window.location = '?setModule=Admin&setPage=docs_auth&group_id='+$(this).val();
				});
				
  });

