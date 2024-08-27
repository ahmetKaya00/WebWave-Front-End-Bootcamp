import './App.css';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

function App() {

  //Uyarı mesajı
  function showAlert(){
    alertify.alert('Bu bir uyarıdır.');
  }

  // Onay Mesajı gösterme
  function showConfirm(){
    alertify.confirm('Bu işlemi onaylıyor musunuz?', function(){
      alertify.success('Onaylandı');
    }, function(){
      alertify.error('İptal Edildi');
    });
  }

  //Giriş (Prompt) mesajı gösterme

  function showPrompt(){
    alertify.prompt('Adınızı giriniz:' , '', function(evt, value){
      alertify.success('Merhaba, ' + value);
    },
  function(){
    alertify.error('İptal Edildi.');
  });
  }

  //Kısa süreli log mesajı
  function showLog(){
    alertify.success('Bu bir başarı mesajıdır!');
    alertify.error('Bu bir hata mesajıdır.');
  }

  return (
    <div className="App">
     <h1>AlertifyJs Örneği</h1>
     <button onClick={showAlert}>Uyarı Göster</button>
     <button onClick={showConfirm}>Onay Mesajı Göster</button>
     <button onClick={showPrompt}>Giriş Mesajı Göster</button>
     <button onClick={showLog}>Log Mesajı Göster</button>
    </div>
  );
}

export default App;
