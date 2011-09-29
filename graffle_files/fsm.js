

function FSM(){
	this.statuslist = new Array();
	this.actionlist = new Array();
	var thisfsm=this;
	
	
	//************Status Constructor***********
	this.Status = function(name,type,graphicalobject){
		var type=type;
		var that=this;
		this.name=name;
		this.graphicalobject=graphicalobject;
		thisfsm.statuslist.push(this);
		
		//***Method to remove the status from the list***
		this.deletestatus = function(){
			for (var i = 0; i < statuslist.length; i++){
				if (thisfsm.statuslist[i] === this){
					thisfsm.statuslist.splice(i,1);
				}
			}
		}
		//***********************************************
		
		//***Method to modify type (initial, final, normal)***
		this.setType = function(typestring){
			if(typestring=="I" || typestring=="F" || typestring=="N"){
				type=typestring;
			}
			else{
				var err = new Error();
				err.name = "Wrong type argument";
				err.message = "You've tried to set the type of the status to '" + typestring + "'. Only values 'I', 'F', 'N' are allowed.";
				throw(err);
			}
		}
		//*********************************
		
		
	};
	//**********Status Constructor END*********
	
	
	//************Action Constructor***********
	this.Action = function(name, roles, graphicalobject){
		this.name = name;
		var from;
		var to;
		var roles = roles;
		var that = this;
		thisfsm.actionlist.push(this);
		this.graphicalobject=graphicalobject;
		
		//***Method to remove the status from the list***
		this.deleteaction = function(){
			for (var i = 0; i < actionlist.length; i++){
				if (thisfsm.actionlist[i] === this){
					thisfsm.actionlist.splice(i,1);
				}
			}
		}
		
		//***********************************************
	};
	//**********Action Constructor END*********
}