function checkSubarraySum() {
    const arrayInput = document.getElementById('arrayInput').value;
    const targetInput = parseInt(document.getElementById('targetInput').value, 10);
    const arr = arrayInput.split(',').map(Number);
    const target = targetInput;

    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            document.getElementById('output').innerText = 'True';
            return;
        }
    }

    document.getElementById('output').innerText = 'False';
}
