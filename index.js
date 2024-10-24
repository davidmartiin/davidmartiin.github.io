class ScannerImport {
        //Data Management
        products = [];
        fullBarcodeString = "";
        tempBarcodeString = "";
        
        barcodeProcessedflag = false;
        scanInProgress = false;
        scannerInput = document.getElementById('scannerInput');
        parseScannerItemsToString = (e) => {
            //this.scannerInput.focus({preventScroll: true, focusVisible: false});

                if(e.code == 'LeftShift' || e.key == "Shift"){ return; }
            if (e.code == 'Enter') {
                this.products.push(this.tempBarcodeString.toUpperCase());
                this.tempBarcodeString = "";

                const lengthToCheck = this.fullBarcodeString.length;

                setTimeout(() => {
                    this.checkProgress(lengthToCheck);
                }, 500);

            } else {
              
                //Prevent the page from scrolling
                if (e.code == "Space" || e.key == " ") {
                    e.preventDefault();
                    console.log('e.key', e.key);
                    console.log('e', e);
                        
                }
                const x = document.getElementById('list'); 
                    const l = document.createElement('li');
      
                        l.innerText = 'code:' + e.code + ' key: ' + e.key + '';
      
                      x.appendChild(l);
                this.tempBarcodeString += e.key;
                this.fullBarcodeString += e.key;
              console.log(this.tempBarcodeString);
              console.log(this.fullBarcodeString);
            }

        }
        checkProgress = (len) => {
            if (this.fullBarcodeString.length === len && this.barcodeProcessedflag === false) {
                this.barcodeProcessedflag = true;
                    //document.removeEventListener("keypress", this.parseScannerItemsToString);
                document.removeEventListener("keydown", this.parseScannerItemsToString);

               this.controlMethod();
            }


        }
  controlMethod = () => {
    console.log(this.skus);
    console.log('done');
    const main = document.getElementById('main');
    const x = document.getElementById('list');
    //console.log(x);
    for(let i = 0; i < this.products.length; i++){
      console.log(i);
      //const l = document.createTextNode(this.products[i]);
      
      const l = document.createElement('li');
      
      l.innerText = this.products[i];
      
      x.appendChild(l);
    }
  }
}

const x = new ScannerImport();
//document.addEventListener("keypress", x.parseScannerItemsToString); 
document.addEventListener("keydown", x.parseScannerItemsToString); 
