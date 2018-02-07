<template>
    <div class="container">
        <div  v-for="mass in massage">
            <h1>{{mass.title}}</h1>
            <p>{{mass.text}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                massage: [
                    {title: 'KAKO DELUJE MASAŽA ?', text: 'Ukoliko se redovno primenjuje, masaza  deluje blagotvorno na ' +
                    ' kompletan organizam i pritom podstiče dobro '+
                        'raspoloženje. Najveći broj bolesti uzrokovan je stresom, a masaža predstavlja jedno od najboljih sredstava '+
                   ' u borbi protiv napetosti i nervoze čiji je čest uzročnik hronični umor. Pomaže i u slučaju nesanice, naročito '+
                   ' ako obuhvata celo telo,mada se dobar efekat postiže i ukoliko se proimeni samo masaza ledja,masaža stopala ili '+
                   ' masaža vrata. Kod sportista ublažava grčeve i upalu mišića, povećava izdržljivost i pokretljivost, s tim što se '+
                   ' preporučuje pre vežbanja,kada treba izmasirati mišiće koji će biti najaktivniji, ali i nakon treninga kako bi '+
                   ' se ublažili umor i iscrpljenost.' },
                    {title: 'Relaks masaža', text: 'Relax masaža je prijatna masaža koja opušta organizam i sjedinjava protok energije. ' +
                    'Cilj joj je negovanje '+
                    'tela i podizanje opšteg zdravstvenog stanja. Za cilj ima takođe prevencija stresa i relaksacija mišića. '+
                    'Obuhvata celo telo ili pojedine delove kao što su noge, stopala, leđa, grudni koš, vrat ili lice.' },
                    {title: 'Klasicna masaža', text: 'Klasična masaža dovodi do osećaja opuštenosti  i poseduje opšte smirujuće delovanje.'+
                    'Često se koristi i '+
                    'kod sportista, kao zagrevanje i pripremu osobe za jače tehnike, odnosno za sportsku masažu. Odlična je '+
                    'za opuštanje napetosti u mišićima i vraćanje energije nakon povrede. '+
                    'Ovom tehnikom temperatura tijela se povisuje za 2-3 stepena, dolazi do poboljšanja cirkulacije, ne samo '+
                    'u površinskim delovima, već i u potkožnom tkivu i mišićeima, te dolazi do hiperemije tih delova. Poboljšava '+
                    'se dotok kiseonika i hranjivih materija, te se pojačava izlučivanje vode iz tela i stimulise imunitet.'},
                    {title: 'Sportska masaža', text: 'Ova masaža ubrzava procese eliminacije mlečne kiseline nastale prilikom mišičnog rada te time blagotvorno '+
                    'deluje na oporavak mišića.. Sportskom masažom ubrzava se oporavak organizma nakon treninga, '+
                    'a takođe se  mišići ovim putem mogu pripremiti za trening. Ova masaza se preporučuje sportistima i rekreativcima.' },
                    {title: 'Maderoterapija', text: 'Maderoterapija ili terapija drvetom je sve popularnija kod nas, a i svetu. Iako se uglavnom žene odluče za '+
                        'ovu masažu da bi se rešile celulita, ona je korisna i kod bolova u leđima i generalno za detoks organizma. '+
                        'Višak masti, višak šećera i višak aditiva iz hrane takođe ostaju zarobljeni u našem telu i zajedno stvaraju '+
                    'masne naslage koje liče na pomorandžinu koru – celulit. Ono što masaža okalgijama zapravo radi jeste '+
                    'stimulacija limfnog sistema, koji je zadužen za izbacivanje toksina iz našeg tela.' },

                ]
            }
        }
    }
</script>

<style>

</style>