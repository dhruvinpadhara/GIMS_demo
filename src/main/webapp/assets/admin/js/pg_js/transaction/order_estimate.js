function res(){
	$('#employee_form')[0].reset();
	$('#comp_id').val(0);
	$('#add_form').modal('hide');
}
show();
function show() {
	let today = new Date().toISOString().substr(0, 10);
	document.querySelector("#trDate").value = today;
	
	let srNo = "Gims/Order/20-21/1";
	
//	$('#srNumber').html(srNo);
	document.getElementById("srNumber").value = srNo;
	
	var element = document.getElementById("barcode");
	
	JsBarcode(element, srNo, {
		  width:2,
		  height:60,
		  displayValue: false
		});
}

function print_estimate(){
		var printContents = document.getElementById("hello").innerHTML;
		var originalContents = document.body.innerHTML;
		document.body.innerHTML = printContents;
		window.print();
		document.body.innerHTML = originalContents;
	}

var count=0;	
function add_row() {	
	var add_id=document.getElementById('media-list-target-left');

	var html=[
		'<td>',
		'<i class="icon-dots dragula-handle"></i>',
		'</td>',
		'<td>',
		'<input type="text" class="form-control"  placeholder="Enter index.." value="',count,'" name="index',count,'" />',
		'</td>',
		'<td>',
		'<input type="text" class="form-control"  placeholder="Item Name.." name="name',count,'" />',
		'</td>',
		'<td>',
		'<input type="text" class="form-control" id="size',count,'" placeholder="Size "  name="size',count,'" />',
		'</td>',
		'<td>',
		'<input type="number" class="form-control" id="queantity',count,'"  placeholder="Bundle " name="bundle',count,'"/>',
		'</td>',
		'<td>',
		'<input type="number" class="form-control" id="total',count,'"  onblur="findTotal()"   placeholder="Qty " name="qty" />',
		'</td">',
		'<td>',
		'<input type="number" class="form-control" id="total',count,'"  onblur="findTotal()"   placeholder="Price" name="qty" />',
		'</td>',
		'<td>',
		'<input type="text" class="form-control" id="stotale',count,'"  readonly="readonly" onblur="findTota()"  placeholder="subTotal" name="qt" />',
		'</td>',
		'<td>',
		'<a class="list-icons-item delete1" onclick="removedata(',count,')" id="delete"><i class="icon-trash"></i></a>',
		'</td>'].join('');

		var tr=document.createElement('tr');
		tr.innerHTML=html;
		tr.id='row'+count;
		count++;
		add_id.appendChild(tr);
}

function removedata(count) {
	var addrow=document.getElementById('media-list-target-left');
	var tt =document.getElementById('row'+count);
	addrow.removeChild(tt);
}

function a(id) {
	var t=document.getElementById('price'+id).value;
	var t1=document.getElementById('queantity'+id).value;
	if (t == '' || t1 == '') {
		t=0;
		t1=0;
	}
	var c=parseInt(t) * parseInt(t1);
	document.getElementById('total'+id).value = c.toFixed(2);
}

function b(id) {
	var k=document.getElementById('txt'+id).value;
	var k1=document.getElementById('total'+id).value;

	var c1=parseInt(k1) + ((parseInt(k1) * parseInt(k))/100);
	document.getElementById('stotale'+id).value = c1.toFixed(2);
}


function findTotal(){
    var arr = document.getElementsByName('qty');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('subtotal').value = tot;	
}

function findTota(){
    var arr = document.getElementsByName('qt');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('Loppl').value = tot;
}




function check_service(service){
//	console.log(service);
/*
	if(service=="transport"){
		$('.courier').hide();
		$('#slabel').html('L.R Number');
		$('.transport').show(); 
	}else if(service=="courier"){
		$('.courier').show();
		$('#slabel').html('Doc Number');
		$('#sname').attr("name","")
		$('.transport').hide();
	}*/
}

party();
function party() {
	$.ajax({
		url:'dmodel.db',
		method:'POST',
		data: {'model':'Account_detail_model'},
		success:function(data)
		{
			$('#partyName').html('');
  			var optionf = $('<option/>');
			optionf.attr('value',"").text("select Party name");
			$('#partyName').append(optionf);
  			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.accdid).text(this.party_name);           
				$('#partyName').append(option);
         	});
		}		
	});
}