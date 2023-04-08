function mergeSort(array, start, end) {
    if (start < end) {
        const mid = parseInt((start + end) / 2);
        mergeSort(array, start, mid);
        mergeSort(array, mid + 1, end);
        merge(array, start, mid, end);
    }
}

function merge(array, start, mid, end) {

    // Temp array
    const temp = new Array((end - start + 1))

    let i = start, j = mid + 1, k = 0;

    while (i <= mid && j <= end) {
        if (array[i] <= array[j]) {
            temp[k] = array[i];
            i++;
            k++;
        } else {
            temp[k] = array[j];
            k++;
            j++;
        }
    }

    while (i <= mid) {
        temp[k] = array[i];
        i++;
        k++;
    }

    while(j <= end) {
        temp[k] = array[j];
        j++;
        k++;
    }

    for (let i = start; i <= end; i++) {
        array[i] = temp[i - start];
    }
}


const arr = [3, -4, 23, 0, 6, 90, -24, 4];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);