// 曜日とnoteのURLマッピング
const dayLinks = {
    0: { name: '日曜日', url: 'https://note.com/sonoma_miyajima/n/n071121386a7b' },
    1: { name: '月曜日', url: 'https://note.com/sonoma_miyajima/n/n2298fb4b0c28' },
    2: { name: '火曜日', url: 'https://note.com/sonoma_miyajima/n/n8ce52cc61826' },
    3: { name: '水曜日', url: 'https://note.com/sonoma_miyajima/n/naa1d55a62e13' },
    4: { name: '木曜日', url: 'https://note.com/sonoma_miyajima/n/n321c45484ce0' },
    5: { name: '金曜日', url: 'https://note.com/sonoma_miyajima/n/n7f07464e8f1e' },
    6: { name: '土曜日', url: 'https://note.com/sonoma_miyajima/n/n94ed555a931a' }
};

function calculateDay() {
    // 入力値を取得
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);
    
    // バリデーション
    if (!year || !month || !day) {
        alert('年・月・日をすべて入力してください');
        return;
    }
    
    if (year < 1900 || year > 2100) {
        alert('1900年から2100年の間で入力してください');
        return;
    }
    
    if (month < 1 || month > 12) {
        alert('月は1から12の間で入力してください');
        return;
    }
    
    if (day < 1 || day > 31) {
        alert('日は1から31の間で入力してください');
        return;
    }
    
    // 日付の妥当性チェック
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
        alert('正しい日付を入力してください');
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
