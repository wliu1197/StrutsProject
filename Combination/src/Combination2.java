
public class Combination2 {
	

        /**
         * @param args
         */
	 public static void printCombination(double[] nums, int[] counts,int count[], int
	    		startIndex, double totalAmont){
	    		
	    		
	            if (startIndex == nums.length || totalAmont<=0.0001){
	                    //System.out.print("" + totalAmont + "=");
	             int s=0;
	             for(int j=0; j<count.length; j++){
	            	 if(count[j]==0) s++;
	             }
	             if(s==8){
	            	for (int i=0; i<nums.length; i++){
	                  //  System.out.print("" + counts[i] + "*" + nums[i] + " + ");
	                   
	                          	count[i]=counts[i];
	                          	
	                         
	                               
	            	}
	            	// System.out.println("");
	             } 
	            	return ;
	            }else  if (startIndex == nums.length -1){
	                    if (totalAmont%nums[startIndex]==0){
	                            counts[startIndex] = (int) (totalAmont/nums[startIndex]);
	                          //  printCombination(nums, counts,count, startIndex+1,0);
	                            
	                    }
	            } else {
	                    for(int i =0; i<= (totalAmont/nums[startIndex]);i++){
	                            counts[startIndex] = i;
	                            printCombination(nums, counts,count, startIndex+1,totalAmont -
	                            		nums[startIndex]*i);
	                    }
	            }
	           
				
	    }
        public static void main(String[] args) {
                // TODO Auto-generated method stub
                double nums[] = {79.9799,80.0642,132.1161,146.1430,162.1424,203.1950,291.2579,307.2573};
                String names[]={"Phosphate","Sulphate","Pentose","Deoxyhexose","Hexose","HexNAc","NeuAc","NeuGc"};
                int[] count = new int[nums.length];
                int[] counts = new int[nums.length];
                double totalnumbers[] ={1217.10201,1379.244401,1445.350201,1461.349601,1502.402201,1541.386801,1549.412501,1623.49201,1648.545201,1664.544601,1703.529201,1711.554901,1752.607501,1769.63501,1810.687601,1826.68701,1865.671601,1873.697301,1898.750501,1914.749901,1955.8025001,1972.83001,2060.8929001,2061.921001,2101.9455001,2117.9449001,2206.0078001,2207.0359001,2264.0879001,2352.1508001,2555.3458001,1607.4926001};
                
                
                
              //  double totalnumbers11_20 [] ={1703.529201,1711.554901,1752.607501,1769.63501,1810.687601,1826.68701,1865.671601,1873.697301,1898.750501,1914.749901};
                
            //    double totalnumbers21_32 []={1955.8025001,1972.83001,2060.8929001,2061.921001,2101.9455001,2117.9449001,2206.0078001,2207.0359001,2264.0879001,2352.1508001,2555.3458001,1607.4926001};
               // printCombination(nums, counts,count,0,1549.412501);
               
                
               int number=0;
               for(double d : totalnumbers){
            	   number +=1;
            	   System.out.print("Glycan Number: "+ number+" ");
	                printCombination(nums, counts,count,0,d);
		                
		                for (int i=0; i<nums.length; i++){
		                    System.out.print("" + count[i] + "-" + names[i] + " + ");
		                }
		                System.out.println("");
	              
		                for(int i=0; i<count.length; i++){
		               		  count[i] =0;
		               	  }
		               	 
               
               
               	}
               	  
               }

        
}
