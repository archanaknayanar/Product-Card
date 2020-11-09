
const colors = document.querySelectorAll('.color');
const image = document.querySelector('.image');

colors.forEach(function (color){
    color.addEventListener("click" , function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('grey')){
            document.getElementById("#pic").src = "https://images-na.ssl-images-amazon.com/images/I/7100boX9WUL._SY535._SX._UX._SY._UY_.jpg";
        }
       
    });
    
});