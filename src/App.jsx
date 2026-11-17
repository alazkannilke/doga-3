import { useState } from 'react'
import './App.css'

const messages = [
  'Gülüşün, en sıradan günü bile güzelleştiriyor.',
  'Varlığın, hayatımın en güzel tesadüfü.',
  'Seninle geçen zamanın saati biraz daha yavaş aksa keşke.',
  'Sesini duyunca içimdeki telaş usulca susuyor.',
  'Yanımda olmasan da günümde sana ayrılmış bir yer var.',
  'Birlikte güldüğümüz şeyleri durup durup hatırlıyorum.',
  'Bugün de en sevdiğim insan sensin. Sürpriz olmadı.',
  'Seninle sessiz kalmak bile güzel geliyor.',
  'Gözlerin aklıma gelince gün biraz aydınlanıyor.',
  'İyi ki o gün yollarımız kesişmiş.',
  'Bazen tek ihtiyacım, senden gelen küçücük bir mesaj.',
  'Dünyanın en güzel tesadüfü gibi geldin bana.',
  'Sen anlatırken, en sıradan hikâye bile güzelleşiyor.',
  'Bugün sana sarılmayı biraz fazla özledim.',
  'Kalabalıkta bile gözüm seni arıyor.',
  'Yanında kendim olabilmek, en sevdiğim hislerden biri.',
  'Birlikte yapacağımız küçük planları bile seviyorum.',
  'Sen gülünce ben de nedenini unutup gülüyorum.',
  'Aklımdan geçen en güzel şeylerden biri yine sensin.',
  'Bugün kendine iyi davran; benim için çok kıymetlisin.',
  'Sana anlatacaklarımı içimden prova ettiğim oluyor.',
  'En sevdiğim manzara, senin bir şeye heyecanlanışın.',
  'Senden sonra “evim gibi” dediğim bir insan oldu.',
  'Bir kahve, biraz sen; günün geri kalanı hallolur.',
  'Güzel şeyleri görünce sana göstermek istiyorum.',
  'Bugün de kalbimin tarafı belli: sen.',
  'Seninle sıradan bir yürüyüş bile güzel bir anıya dönüşüyor.',
  'Bana kendimi iyi hissettirmeyi hiç fark etmeden başarıyorsun.',
  'Sana bakarken zamanın geçtiğini anlamıyorum.',
  'İçimden sana “iyi ki” demek geçti. Yine.',
  'Bazen bir günün en güzel kısmı, seninle konuşacağımı bilmek.',
  'Sana anlatırken kelimeler biraz daha kolay geliyor.',
  'Birlikte güldüğümüz anları biriktiriyorum, haberin olsun.',
  'Bugün de yüzünde küçük bir gülümseme bırakabildiysem ne güzel.',
  'Seni özlemek bile senden bir parça taşıyor gibi.',
  'Dünyamın en tatlı alışkanlıklarından biri oldun.',
  'Senin yanında dakika değil, an biriktiriyorum.',
  'Bugün sana kocaman bir sarılma borçlandım.',
  'En sevdiğim “sonra görüşürüz”, seninki.',
  'Seninle gelecekten bahsetmek içimi ısıtıyor.',
  'Bana en çok yakışan şeylerden biri, senin yanında mutlu olmak.',
  'Küçük bir haberim var: yine seni düşündüm.',
  'Senin “nasılsın?” deyişin bile başka geliyor.',
  'Yanımda olunca dünya biraz daha yerli yerinde.',
  'Sana söylemediğim güzel şeyler de var; mesela bugün de çok özelsin.',
  'Günün nasıl geçerse geçsin, umarım sonunda biraz dinlenirsin.',
  'Seninle paylaşılan bir sıradanlık, bana yetiyor.',
  'Bazen fotoğrafına bakıp “ne güzel insan” diyorum.',
  'Yanında daha cesur, daha sakin, daha kendim gibiyim.',
  'Bugün içimden geçen: keşke şimdi elini tutabilsem.',
  'Seninle tanıştığım günü güzel bir başlangıç diye saklıyorum.',
  'Birlikte yaşlanma fikri kulağa hiç fena gelmiyor.',
  'Senin sevdiğin şeyleri öğrenmek hoşuma gidiyor.',
  'Günün ortasında aklıma geldin; gerisi biraz daha kolay geçti.',
  'Sen konuşurken yüzündeki ifadeleri izlemeyi seviyorum.',
  'Bana iyi gelen yerlerden biri, yanın.',
  'Bugün de sana anlatacak minicik bir şey biriktirdim.',
  'Sana kızsam bile uzun sürmüyor; yüzünü düşününce geçiyor.',
  'Seninle aynı şarkıyı dinlemek bile yakın hissettiriyor.',
  'Güzel bir şey olduğunda ilk sana anlatmak istiyorum.',
  'Hayatımda olduğun için sana her gün teşekkür etmiyorum belki, ama içimden ediyorum.',
  'Senin yanında dünya daha az acele ediyor.',
  'Bugün de kalbime iyi geldin; uzakta olsan bile.',
  'Sana bakıp “ben bu insanı çok seviyorum” dediğim anlar çoğalıyor.',
  'Seninle kurduğum küçük hayaller bile yüzümü güldürüyor.',
  'Birlikte kaybolsak, yolu bulmayı dert etmem.',
  'Senin sesin, en sevdiğim bildirim sesi olabilir.',
  'Bazen sana söyleyeceğim şeyi sırf sesini duymak için uzatıyorum.',
  'Seninle her şey kusursuz olmak zorunda değil; birlikte olsun yeter.',
  'Bugün sana iyi ki varsın demek istedim. İşte dedim.',
  'Yanında geçen zamanın tekrarını izleyebilsem keşke.',
  'Beni en çok güldüren insanla en çok özlediğim insan aynı.',
  'Seninle ilgili küçük ayrıntılar aklımda kalıyor.',
  'Bana baktığında içimden geçenleri bilsen, biraz utanırdım.',
  'Sana doğru yürümek, günün en kolay kararı.',
  'Birlikte susup etrafı izlemek de plan sayılır bence.',
  'Senin mutlu olduğun şeylere ben de seviniyorum.',
  'Bugün kendini güzel hisset; çünkü gerçekten öylesin.',
  'Sana sarılınca omuzlarımın gevşediğini yeni fark ettim.',
  'En güzel mesajlardan biri, senden gelen “eve vardım”.',
  'Seninle paylaştığım küçük anlar, günün içinde saklı duruyor.',
  'Bir gün anlatacağımız çok güzel anılar biriktiriyoruz.',
  'Sen yanımdayken telefonuma bakmayı unutuyorum.',
  'Bazen tek bir bakışın, uzun uzun konuşmaktan daha fazlasını söylüyor.',
  'Sana çiçek alsam da almasam da aklımda hep sen varsın.',
  'Bugün yine bir şeye güldüm ve bunu sana anlatmak istedim.',
  'Seninle aynı tarafta olmak bana iyi geliyor.',
  'Uzakta olsan da içimde sana yakın bir yer var.',
  'Sana dair sevdiğim şeyleri saysam, bugün bitmez.',
  'Birlikte geçirdiğimiz günler takvimde değil, içimde duruyor.',
  'Günün sonunda aklımın döndüğü yer yine sen.',
  'Sana baktığımda, acele etmeden sevmenin ne demek olduğunu anlıyorum.',
  'Bugün de seninle aynı dünyada olduğuma sevindim.',
  'Yüzünü güldüren şeylerin arasında ben de olayım isterim.',
  'Seninle sıradaki güzel anımızı merak ediyorum.',
  'Elini tuttuğumda başka hiçbir yere yetişmem gerekmiyor gibi.',
  'İyi geceler demeden önce aklımdan geçen son kişi genelde sensin.',
  'Bu yüz günlük notların sonuncusu ama sana söyleyeceklerim bitmedi.',
  'Yüz gündür her güne seni düşünerek küçük bir yer açtım. İyi ki sen.',
]

function getDateKey(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function getDayNumber(startDateKey, todayKey) {
  const [startYear, startMonth, startDay] = startDateKey.split('-').map(Number)
  const [todayYear, todayMonth, todayDay] = todayKey.split('-').map(Number)

  const start = Date.UTC(startYear, startMonth - 1, startDay)
  const today = Date.UTC(todayYear, todayMonth - 1, todayDay)

  return Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1
}

function App() {
  const [todayKey] = useState(() => getDateKey())

  // İlk ziyaret gününü başlangıç olarak kaydet.
  const [startDateKey] = useState(() => {
    const savedStartDate = localStorage.getItem('love-notes-start-date')

    if (savedStartDate) return savedStartDate

    localStorage.setItem('love-notes-start-date', todayKey)
    return todayKey
  })

  // Bugünkü mesaj daha önce açıldıysa aynı mesajı göster.
  const [opened, setOpened] = useState(
    () => localStorage.getItem('opened-message-date') === todayKey,
  )

  const dayNumber = getDayNumber(startDateKey, todayKey)
  const message = messages[dayNumber - 1]
  const canOpenToday = dayNumber >= 1 && dayNumber <= messages.length

  function openMessage() {
    if (localStorage.getItem('opened-message-date') === todayKey) {
      setOpened(true)
      return
    }

    localStorage.setItem('opened-message-date', todayKey)
    setOpened(true)

    const audio = document.getElementById('background-music')
    if (audio) audio.play().catch(() => {})
  }

  return (
    <main className="page">
      <div className="shade" />

      <div className="hearts" aria-hidden="true">
        {Array.from({ length: 24 }, (_, index) => (
          <span
            key={index}
            style={{
              '--x': [8, 76, 31, 92, 52, 17, 66, 42, 84, 25, 58, 4][index % 12],
              '--size': [20, 34, 25, 30, 18, 38, 23, 32, 21, 28, 36, 24][index % 12],
              '--duration': `${[8, 11, 9, 13, 7, 10, 12, 8, 14, 9, 11, 7][index % 12]}s`,
              '--delay': `${-[1, 7, 3, 10, 5, 12, 2, 8, 4, 11, 6, 9][index % 12]}s`,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      <section className="card">
        <p className="eyebrow">SANA ÖZEL · 100 GÜN</p>
        <div className="heart" aria-hidden="true">♡</div>

        <h1>Her gün<br />kalbimden sana</h1>

        <p className="intro">
          Her gün, sana olan sevgimden küçük bir not saklı.
        </p>

        {!opened && canOpenToday ? (
          <button className="open-button" onClick={openMessage}>
            Kalbimdeki notu aç <span>♥</span>
          </button>
        ) : opened && message ? (
          <div className="message-box" key={dayNumber}>
            <p className="day">GÜN {dayNumber} / 100</p>
            <p className="message">“{message}”</p>
            <div className="tiny-heart">♥</div>
          </div>
        ) : dayNumber > messages.length ? (
          <div className="message-box">
            <p className="message">
              Yüz günlük notlarımız tamamlandı. Her günü seninle güzelleştirdiğin için teşekkür ederim. ♥
            </p>
          </div>
        ) : (
          <div className="message-box">
            <p className="message">İlk güzel notun zamanı henüz gelmedi. ♥</p>
          </div>
        )}

        {opened && canOpenToday && (
          <p className="already-opened">
            Bugünün notunu açtın. Yarın yenisi burada olacak. ♥
          </p>
        )}

        <p className="footer">Seni düşündüğüm her ana, sevgiyle.</p>
      </section>

      <audio id="background-music" src="/muzik.mp3" loop />
    </main>
  )
}

export default App