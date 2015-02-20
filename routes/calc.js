


exports.result = function(req, res){
	var n1 = req.param('number1');
	var n2 = req.param('number2');
    if(req.param('operation') == 'add')
    {
        result = +n1 + +n2;
    }
    else if(req.param('operation') == 'subtract')
    {
        result = +n1 - +n2;
    }
    else if(req.param('operation') == 'divide')
    {
        result = +n1 / +n2;
    }
    else
    {
        result = +n1 * +n2;
    }
	
  res.render('result', { result: result, title: 'Calculator' }, function(err, result){
                if(!err)
                {
                    res.end(result);
                }
                else
                {
                    res.end('An error occurred');
                    console.log(err);
                }
            });
};
