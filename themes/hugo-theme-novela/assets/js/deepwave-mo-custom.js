console.log('deepwave-mo-custom.js init')


document.addEventListener('DOMContentLoaded', function(e){
    
    // Finding all MOs
    
    let mos = document.querySelectorAll('.mo-single')
    
    mos.forEach(function(entry, index){
        console.log('MO No. ' + index)
        
        // Finding all Explanations in each MO Translation
        let explanations = entry.querySelectorAll('.mo-explanation')
        explanations.forEach(function(entry, index){
            console.log(entry)
        })
        
        // ## link Explanation to #links in Original
        
        // Finding all Anchor-Links in each MO Original
        let explanationLinks = entry.querySelectorAll('a[href^="#"]')
        explanationLinks.forEach(function(entry, index){

            entry.addEventListener('click', function(e){
                e.preventDefault()
                
                // ## remove .active if assigned elsewhere 
                // ## markiere Link im Original (korrespondierend)
                
                document.querySelector('.mo-explantaion.active').classList.remove('active')
                explanations[index].classList.toggle('active')
            })
            
        })
        
        
    })
})