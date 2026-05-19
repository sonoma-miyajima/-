// 曜日とnoteのURLマッピング(英語版)
const dayLinks = {
    0: { name: 'Sunday', url: 'https://note.com/sonoma_miyajima/n/n071121386a7b' },
    1: { name: 'Monday', url: 'https://note.com/sonoma_miyajima/n/n2298fb4b0c28' },
    2: { name: 'Tuesday', url: 'https://note.com/sonoma_miyajima/n/n8ce52cc61826' },
    3: { name: 'Wednesday', url: 'https://note.com/sonoma_miyajima/n/naa1d55a62e13' },
    4: { name: 'Thursday', url: 'https://note.com/sonoma_miyajima/n/n321c45484ce0' },
    5: { name: 'Friday', url: 'https://note.com/sonoma_miyajima/n/n7f07464e8f1e' },
    6: { name: 'Saturday', url: 'https://note.com/sonoma_miyajima/n/n94ed555a931a' }
};

function calculateDay() {
    // 入力値を取得
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);
    
    // バリデーション
    if (!year || !month || !day) {
        alert('Please enter year, month, and day');
        return;
    }
    
    if (year < 1900 || year > 2100) {
        alert('Please enter a year between 1900 and 2100');
        return;
    }
    
    if (month < 1 || month > 12) {
        alert('Please enter a month between 1 and 12');
        return;
    }
    
    if (day < 1 || day > 31) {
        alert('Please enter a day between 1 and 31');
        return;
    }
    
    // 日付の妥当性チェック
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
        alert('Please enter a valid date');
        return;
    }
    
    // 曜日を計算
    const dayOfWeek = date.getDay();
    const dayInfo = dayLinks[dayOfWeek];
    
    // 結果を表示
    const resultDiv = document.getElementById('result');
    const resultDayElement = document.getElementById('resultDay');
    const resultLinkElement = document.getElementById('resultLink');
    
    resultDayElement.textContent = dayInfo.name;
    resultLinkElement.href = dayInfo.url;
    
    // 結果エリアを表示
    resultDiv.classList.remove('hidden');
    
    // 結果エリアまでスムーズにスクロール
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Enterキーで計算実行
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateDay();
            }
        });
    });
});
