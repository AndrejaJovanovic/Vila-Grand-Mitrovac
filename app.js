        document.addEventListener('scroll', () =>{
            const header = document.querySelector('nav');
            if(window.scrollY > 0)
                {header.classList.add('scrolled');}
            else{header.classList.remove('scrolled');}
        })
        let counter = 2;
        setInterval(function ap(){
        	document.getElementById('radio' + counter).checked = true;
        	counter++;
        	if (counter > 5) {
        		counter=1;
        	}
        },20000);
        let next = document.querySelector('.next');
        let prev = document.querySelector('.prev');
        next.addEventListener('click', function(){
            let items = document.querySelectorAll('.item');
            document.querySelector('.slajd').appendChild(items[0]);
        })
        prev.addEventListener('click', function(){
            let items = document.querySelectorAll('.item');
            document.querySelector('.slajd').prepend(items[items.length-1]);
        })
