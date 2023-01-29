

// this function is called when we click the button in the app

function Merge(){
    c_delay = 0;
    merge_partition(0,array_size-1);
    enable_buttons();
}

// function for merging two sorted arrays

function merge_sort(start,mid,end){

    var left = start;
    var right = mid+1;
    var Arr = [],k=0;

    for(var i=start;i<=end;i++){
        if(left>mid){
            Arr[k++] = div_sizes[right++];
            div_update(divs[right-1],div_sizes[right-1],"red");
        }else if(right>end){

            Arr[k++] = div_sizes[left++];
            div_update(divs[left-1],div_sizes[left-1],"red");


        }else if(div_sizes[left]<div_sizes[right]){

        }
    }
}

// taking array input with indexes start and end
function merge_partition(start,end)
{
    if(start<end)
    {
        var mid = Math.floor(start+(end-start)/2);
        div_update(divs[mid],div_sizes[mid],"yellow");// updating color upto to the mid size of arrays in each function call
        

        
        merge_partition(start,mid);
        merge_partition(mid+1,end);
        merge_sort(start,mid,end);
    }
}
{

}