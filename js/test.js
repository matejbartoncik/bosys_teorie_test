/**
 * test.js — Cvičný test (exam practice) page logic
 * Ported from original index.html
 */
(function () {
  const TOPICS = [
    {
      id: 1,
      title: 'Definice OS: typy OS; design OS: abstrakce a operace nad nimi – služby, systémová volání',
      questions: [
        { text: 'Dvě základní funkce OS (s vysvětlením).', points: 2 },
        { text: 'Vlastnosti moderního OS.', points: 4 },
        { text: 'Typy OS podle účelu (alespoň šest).', points: 3 },
        { text: 'Reprezentace abstrakcí (koncepcí) v OS a definice systémového volání.', points: 2 },
        { text: 'Průběh systémového volání.', points: 3 },
        { text: 'Příklady systémových volání a co obstarávají (alespoň tři).', points: 1 },
      ],
    },
    {
      id: 2,
      title: 'Architektura jádra OS: monolitický systém, vrstvený systém, virtualizace na úrovni jádra OS, mikrojádro',
      questions: [
        { text: 'Definice monolitického jádra OS.', points: 2 },
        { text: 'Definice vrstveného jádra OS a čím se liší od monolitického s vnitřní strukturou vrstev.', points: 2 },
        { text: 'Definice mikrojádra OS a které funkce zajišťuje.', points: 3 },
        { text: 'Jak jsou v OS s mikrojádrem zajištěny ostatní funkcionality (které nejsou v mikrojádru).', points: 2 },
        { text: 'Definice virtualizace na úrovni jádra OS s příkladem.', points: 3 },
        { text: 'Příklady OS různých architektur jádra (monolitické, vrstvené, mikrojádro).', points: 3 },
      ],
    },
    {
      id: 3,
      title: 'Návrh OS a jeho bezpečnost: důvody náročnosti implementace OS, principy jeho vývoje; zabezpečení systému, uživatelských dat a procesů',
      questions: [
        { text: 'Hlavní obecné cíle návrhu OS.', points: 4 },
        { text: 'Důvody náročnosti návrhu OS.', points: 5 },
        { text: 'Principy vývoje OS.', points: 3 },
        { text: 'Způsoby zabezpečení procesů, dat na médiu a přenášených dat.', points: 3 },
      ],
    },
    {
      id: 4,
      title: 'CPU: provádění instrukce, pipeline, atomicita a přerušitelnost procesu a průběhu zpracování instrukce, přerušovací systém, průběh zpracování přerušení, časovač, sdílení času',
      questions: [
        { text: 'Popis fází provádění instrukce.', points: 4 },
        { text: 'Definice pipeline a další možnosti zvyšování výkonu CPU.', points: 4 },
        { text: 'Přerušitelnost procesu, průběhu zpracování instrukce.', points: 2 },
        { text: 'Přerušovací systém: účel, průběh přerušení.', points: 5 },
      ],
    },
    {
      id: 5,
      title: 'Vstupně-výstupní zařízení: ovladače a techniky programování vstupu a výstupu, DMA. Paměť cache, procesorová cache a střední přístupová doba do paměti',
      questions: [
        { text: 'Metoda 1 komunikace se vstupně-výstupním zařízením (neefektivní – busy waiting / polling).', points: 2 },
        { text: 'Metoda 2 komunikace se vstupně-výstupním zařízením (efektivnější – přerušení).', points: 2 },
        { text: 'Metoda 3 komunikace se vstupně-výstupním zařízením (nejefektivnější – DMA).', points: 3 },
        { text: 'Definice paměti cache.', points: 2 },
        { text: 'Důvod existence konceptu paměti cache.', points: 1 },
        { text: 'Důvod efektivity cache i při její relativně malé velikosti.', points: 2 },
        { text: 'Výpočet střední přístupové doby do paměti.', points: 3 },
      ],
    },
    {
      id: 6,
      title: 'Požadavky OS na HW nutný pro jeho implementaci: zejména na procesor, správu a adresování paměti. Registry CPU',
      questions: [
        { text: 'Nutné vlastnosti CPU a paměti pro implementaci OS a jejich účel.', points: 5 },
        { text: 'Nutné subsystémy HW pro implementaci OS (kromě CPU a paměti) a jejich účel.', points: 4 },
        { text: 'Definice registrů CPU, jejich druhy.', points: 3 },
        { text: 'Stavový registr CPU a zahrnuté příznaky (alespoň tři).', points: 3 },
      ],
    },
    {
      id: 7,
      title: 'Implementace procesu v OS: proces a program, tabulka procesů, přepínání kontextu, stav procesu, třístavový model, příčiny změn stavů',
      questions: [
        { text: 'Proces a program: definice.', points: 2 },
        { text: 'Metadata procesu (alespoň šest).', points: 3 },
        { text: 'Průběh přepnutí kontextu.', points: 3 },
        { text: 'Třístavový model: popis stavů.', points: 3 },
        { text: 'Třístavový model: příčiny přechodů mezi stavy.', points: 4 },
      ],
    },
    {
      id: 8,
      title: 'Procesy v OS UNIX/Linux: vznik a zánik procesu, systémová volání fork(2), exec(3), exit(3), wait(2), kill(2); hierarchie procesů, stavy procesů v Linuxu, posixové signály',
      questions: [
        { text: 'Příčiny vzniku procesu a spuštění nového programu v posixových systémech, související systémová volání, hierarchie procesů.', points: 4 },
        { text: 'Příčiny zániku procesu a čekání na potomka v posixových systémech, související systémová volání.', points: 4 },
        { text: 'Stavy procesů v Linuxu (podle příkazu ps).', points: 4 },
        { text: 'Posixové signály, možnosti jejich zpracování a příklady.', points: 3 },
      ],
    },
    {
      id: 9,
      title: 'Vlákna: motivace zavedení vláken, proces × vlákno, možné implementace vláken, obecné problémy při implementaci a používání vláken; knihovna posixových vláken',
      questions: [
        { text: 'Motivace zavedení vláken.', points: 1 },
        { text: 'Společné a samostatné položky metadat procesů/vláken.', points: 3 },
        { text: 'Důvody vyhrazené části paměti pro každé vlákno.', points: 2 },
        { text: 'Implementace vláken s podporou OS a bez ní, výhody a nevýhody.', points: 4 },
        { text: 'Komplikace při zavádění vláken.', points: 2 },
        { text: 'Posixová knihovna vláken: nástroje pro řešení problémů souběhu a jejich účel.', points: 3 },
      ],
    },
    {
      id: 10,
      title: 'Plánovač. Cíle plánování, režimy plánování, plánovací kriteria pro plánovací algoritmy, plánovací algoritmy',
      questions: [
        { text: 'Úloha plánovače, režimy plánování procesů.', points: 3 },
        { text: 'Cíle plánování (obecně a dle určení OS).', points: 3 },
        { text: 'Popis plánovacích algoritmů: historické (FCFS, SJF, Round Robin…).', points: 3 },
        { text: 'Popis plánovacích algoritmů: moderní a specifické.', points: 6 },
      ],
    },
    {
      id: 11,
      title: 'Požadavky na plánování v systémech reálného času. Možnosti plánování vláken na víceprocesorových systémech (SMP). Časové a periodické plánování úloh uživatelem',
      questions: [
        { text: 'Specifické požadavky na plánování procesů v systémech reálného času, plánovatelnost.', points: 4 },
        { text: 'Plánování vláken na systémech SMP a možné optimalizace.', points: 4 },
        { text: 'Příkazy pro nastavení spouštění úloh v daném čase (at, crontab) a démony, které to obstarávají. Orientačně možnosti konfigurace.', points: 3 },
      ],
    },
    {
      id: 12,
      title: 'Požadavky na paměť, alokace, adresování, pevné (statické) a proměnné (dynamické) dělení paměti, fragmentace paměti, typy fragmentace, umisťovací algoritmy',
      questions: [
        { text: 'Důležité požadavky na operační paměť (kritické pro běh OS).', points: 3 },
        { text: 'Pevné dělení paměti, nevýhody, umisťování procesů.', points: 4 },
        { text: 'Dynamické dělení paměti, nevýhody.', points: 4 },
        { text: 'Umisťovací algoritmy pro dynamické dělení paměti (s popisem).', points: 4 },
      ],
    },
    {
      id: 13,
      title: 'Problém nedostatku operační paměti, odkládání obsahu paměti na disk, virtuální paměť, motivace k zavedení virtuální paměti, výhody virtualizace paměti, princip lokality odkazů, thrashing',
      questions: [
        { text: 'Možná řešení nedostatku RAM (s vysvětlením principu): swapping a virtuální paměť.', points: 4 },
        { text: 'Virtualizace paměti: definice a HW podpora.', points: 3 },
        { text: 'Virtualizace paměti: motivace a důsledky zavedení, princip fungování (proč může fungovat efektivně, přestože je sekundární paměť řádově pomalejší).', points: 2 },
        { text: 'Virtualizace paměti: pojmy Resident Set (RS) a Working Set (S).', points: 1 },
        { text: 'Princip lokality odkazů.', points: 2 },
        { text: 'Thrashing – definice a příčiny.', points: 3 },
      ],
    },
    {
      id: 14,
      title: 'Stránkování paměti, převod adresy, vlastnosti stránkování, sdílení stránek, volba velikosti stránky, řešení problému rozsáhlých stránkových tabulek, TLB',
      questions: [
        { text: 'Princip stránkování, vlastnosti (spojitost, fragmentace, sdílení).', points: 5 },
        { text: 'Stránkové tabulky, převod adresy (logická → fyzická).', points: 4 },
        { text: 'Volba velikosti stránky a důsledky.', points: 3 },
        { text: 'Řešení rozsáhlosti stránkových tabulek (víceúrovňové tabulky, invertovaná tabulka), TLB.', points: 3 },
      ],
    },
    {
      id: 15,
      title: 'Řídicí bity ve stránkových tabulkách, strategie zavádění, umisťování, nahrazování a uklízení (čištění) stránek paměti, vliv velikosti resident-set na běh procesů',
      questions: [
        { text: 'Důležité řídicí bity ve stránkové tabulce (z hlediska algoritmů nahrazování) a jejich význam.', points: 3 },
        { text: 'Strategie zavádění stránek: účel, algoritmy.', points: 3 },
        { text: 'Strategie umisťování stránek: účel, algoritmy.', points: 1 },
        { text: 'Strategie nahrazování stránek: účel, algoritmy (OPT, FIFO, LRU, NRU…).', points: 4 },
        { text: 'Strategie uklízení (čištění) stránek: účel, algoritmy.', points: 3 },
        { text: 'Volba velikosti resident-set a vliv na běh procesů.', points: 1 },
      ],
    },
    {
      id: 16,
      title: 'Požadavky na OS pro práci v reálném čase, rozdělení RT OS, pojmy latence a odezva; vestavěné systémy, OS pro ně a typické požadavky',
      questions: [
        { text: 'Definice systémů RT (pracujících v reálném čase) a jejich správná funkce.', points: 1 },
        { text: 'Rozdělení systémů RT dle dodržování termínů (hard RT, soft RT, firm RT – s popisem).', points: 3 },
        { text: 'Charakteristické vlastnosti RTOS.', points: 4 },
        { text: 'Příklady RTOS (alespoň dva).', points: 1 },
        { text: 'Definice pojmů latence a odezva (na úrovni přerušovacího systému).', points: 2 },
        { text: 'Definice vestavěných systémů.', points: 1 },
        { text: 'Typické vlastnosti vestavěných systémů (alespoň šest).', points: 3 },
      ],
    },
    {
      id: 17,
      title: 'Víceprocesorové systémy, rozdělení dle vazby a dle symetrie, granulovatelnost úlohy, distribuované (clusterové) OS',
      questions: [
        { text: 'Kategorie počítačových systémů z hlediska paralelizace zpracování dat.', points: 4 },
        { text: 'Rozdělení víceprocesorových systémů dle vazby (tight-coupled vs. loose-coupled).', points: 2 },
        { text: 'Rozdělení víceprocesorových systémů dle symetrie (SMP vs. AMP).', points: 2 },
        { text: 'Granularita úlohy: účel, jak se pozná, že úloha je/není granulovatelná.', points: 4 },
        { text: 'Vhodné stupně vazby pro různou granularitu.', points: 3 },
      ],
    },
    {
      id: 18,
      title: 'Soupeření procesů (o prostředky), obecné problémy souběhu, vzájemné vylučování, kritická sekce, předpoklady pro řešení KS, požadované vlastnosti řešení KS, typy řešení',
      questions: [
        { text: 'Definice kritické sekce v programu.', points: 4 },
        { text: 'Předpoklady pro řešení přístupu do kritické sekce. (Co se předpokládá, že platí, a co se nesmí předpokládat.)', points: 4 },
        { text: 'Požadované vlastnosti řešení přístupu do kritické sekce (s vysvětlením).', points: 3 },
        { text: 'Typy řešení přístupu do kritické sekce (s příklady).', points: 4 },
      ],
    },
    {
      id: 19,
      title: 'Řízení přístupu do kritické sekce pomocí SW metod, příklady nevhodných (obecně nefunkčních) SW řešení, SW algoritmy, vlastnosti (nedostatky) SW metod',
      questions: [
        { text: 'SW algoritmus pro KS s proměnnou locked – popis a důvod nefunkčnosti.', points: 2 },
        { text: 'SW algoritmus pro KS s proměnnou turn – popis a důvod nefunkčnosti.', points: 2 },
        { text: 'SW algoritmus pro KS s proměnnými flag[i] – popis a důvod nefunkčnosti.', points: 2 },
        { text: 'Funkční SW algoritmy pro řízení přístupu do KS (Petersonův, Dekkerův), krátká charakteristika.', points: 4 },
        { text: 'Specifické nevýhody SW algoritmů pro řízení přístupu do KS (včetně vysvětlení, bez všeobecných nevýhod všech typů algoritmů).', points: 5 },
      ],
    },
    {
      id: 20,
      title: 'Řízení přístupu do kritické sekce pomocí HW metod, výchozí předpoklady pro HW řešení, algoritmy využívající HW instrukce, vlastnosti (nedostatky) HW metod',
      questions: [
        { text: 'Hardwarové předpoklady pro řízení přístupu do KS.', points: 3 },
        { text: 'HW podpora pro řízení přístupu do KS, popis řešení (instrukce TSL/TAS, CAS).', points: 5 },
        { text: 'Vlastnosti (nedostatky) HW řešení.', points: 7 },
      ],
    },
    {
      id: 21,
      title: 'Nástroj OS: semafor, jeho popis včetně systémových volání, použití semaforu pro řízení přístupu do KS a pro synchronizaci, problém obědvajících filozofů',
      questions: [
        { text: 'Popis nástroje OS: semafor (definice, typy – binární/obecný).', points: 2 },
        { text: 'Popis systémových volání semaforu (sem_init, sem_wait, sem_post a jejich sémantika).', points: 5 },
        { text: 'Popis řešení přístupu do KS používajícího semafor.', points: 3 },
        { text: 'Popis řešení synchronizace vláken pomocí semaforu.', points: 3 },
        { text: 'Definice problému obědvajících filozofů a jeho řešení pomocí semaforů.', points: 2 },
      ],
    },
    {
      id: 22,
      title: 'Nástroj OS: předávání zpráv, popis systémových volání a možností blokování, použití fronty zpráv pro řízení přístupu do KS a pro synchronizaci, problém svázaných producentů a konzumentů',
      questions: [
        { text: 'Popis nástroje OS: předávání zpráv (fronta zpráv, princip fungování).', points: 3 },
        { text: 'Popis typické implementace (ne)blokování systémových volání pro předávání zpráv (send/receive a jejich varianty blokování).', points: 3 },
        { text: 'Popis řešení KS používajícího frontu zpráv.', points: 3 },
        { text: 'Popis řešení synchronizace vláken pomocí fronty zpráv.', points: 3 },
        { text: 'Definice problému svázaných producentů a konzumentů a jeho řešení pomocí fronty zpráv.', points: 3 },
      ],
    },
    {
      id: 23,
      title: 'Nástroj programovacích jazyků: koncept monitoru, problém producentů a konzumentů a jeho řešení pomocí monitoru',
      questions: [
        { text: 'Popis konceptu monitoru: jeho účel, struktura a základní vlastnosti.', points: 4 },
        { text: 'Popis řešení KS pomocí monitoru.', points: 2 },
        { text: 'Popis řešení synchronizace vláken pomocí monitoru.', points: 3 },
        { text: 'Definice problému svázaných producentů a konzumentů a jeho řešení pomocí monitoru, podmínky použité u synchronizace a zdůvodnění jejich použití.', points: 6 },
      ],
    },
    {
      id: 24,
      title: 'Nástroje knihovny posixových vláken: mutex, bariéra, podmínková proměnná',
      questions: [
        { text: 'Popis mutexu, účel a vlastnosti, popis funkcí (pthread_mutex_init, lock, unlock, destroy).', points: 3 },
        { text: 'Způsob použití mutexu (vzor zamkni–pracuj–odemkni, nebezpečí deadlocku).', points: 2 },
        { text: 'Bariéra: účel, použití a popis funkcí – včetně návratové hodnoty funkce čekání (PTHREAD_BARRIER_SERIAL_THREAD).', points: 5 },
        { text: 'Podmínková proměnná: účel, způsob použití a vlastnosti (pthread_cond_wait, pthread_cond_signal, pthread_cond_broadcast, proč musí být v kombinaci s mutexem).', points: 5 },
      ],
    },
    {
      id: 25,
      title: 'Stav uváznutí (deadlock) a vyhladovění (definice a rozdíl), nutné podmínky pro vznik stavu uváznutí, předcházení a řešení problému stavu uváznutí, algoritmus bankéře',
      questions: [
        { text: 'Definice stavu uváznutí (deadlock).', points: 2 },
        { text: 'Definice stavu vyhladovění (starvation) a příklad.', points: 1 },
        { text: 'Vysvětlení čtyř nutných podmínek pro vznik stavu uváznutí (Coffmanovy podmínky).', points: 4 },
        { text: 'Přístupy k řešení/odstranění vzniklého stavu uváznutí.', points: 3 },
        { text: 'Způsoby prevence vzniku stavu uváznutí (narušení Coffmanových podmínek).', points: 3 },
        { text: 'Popis bankéřova algoritmu aplikovaného na procesy (s popisem bezpečného/nebezpečného stavu).', points: 2 },
      ],
    },
    {
      id: 26,
      title: 'IPC: komunikace procesů a vláken, možné prostředky komunikace',
      questions: [
        { text: 'Možné prostředky pro komunikaci procesů / vláken (alespoň pět).', points: 5 },
        { text: 'Krátká charakteristika jednotlivých prostředků pro komunikaci procesů / vláken.', points: 5 },
        { text: 'Popis funkcí pro sokety (alespoň pěti typů: socket, bind, listen, accept, connect, send, recv…).', points: 5 },
      ],
    },
    {
      id: 27,
      title: 'Dělení disku na oddíly, zavaděč OS, důvody dělení, MBR, GPT, swap',
      questions: [
        { text: 'Popis důvodů pro rozdělení disku na oddíly.', points: 4 },
        { text: 'Popis MBR a způsob dělení disku na oddíly (struktura MBR, tabulka oddílů, boot loader).', points: 3 },
        { text: 'Popis typů oddílů pro dělení MBR (primární, rozšířený, logický).', points: 3 },
        { text: 'Charakterizace GPT (výhody oproti MBR, struktura).', points: 3 },
        { text: 'Vysvětlení rozdílů mezi odkládacím prostorem (swap) na samostatném diskovém oddíle a v souboru.', points: 2 },
      ],
    },
    {
      id: 28,
      title: 'Souborový systém, metadata, speciální soubory',
      questions: [
        { text: 'Popis obecné struktury souborových systémů a jejich metadat (superblok, inode, datové bloky…).', points: 3 },
        { text: 'Metadata souborů vyjma oprávnění (alespoň šest položek).', points: 3 },
        { text: 'Možná oprávnění na soubor (alespoň šest – čtení, zápis, spuštění, SUID, SGID, sticky…).', points: 3 },
        { text: 'Popis zvláštních typů souborů (alespoň čtyř: adresář, symbolický odkaz, blokové/znakové zařízení, pojmenovaná roura, socket…).', points: 2 },
        { text: 'Charakteristika typů odkazů (hard link a symbolic link) a jejich reprezentace na souborovém systému.', points: 4 },
      ],
    },
    {
      id: 29,
      title: 'Konzistence metadat souborových systémů: příčiny vzniku nekonzistencí, metody zachování konzistence, vlastnosti metod, příklady souborových systémů',
      questions: [
        { text: 'Popis příčiny vzniku nekonzistence metadat souborového systému.', points: 3 },
        { text: 'Popis principu žurnálování (včetně nevýhod) a činnost obnovy konzistence po pádu.', points: 5 },
        { text: 'Popis principu metody copy-on-write (CoW, včetně nevýhod) a činnost obnovy konzistence po pádu.', points: 4 },
        { text: 'Příklady souborových systémů ve vztahu k metodě zachování konzistence (alespoň dva různé pro každou metodu): pro žurnálování zvlášť po dvou příkladech pro dvojí způsob (metadata-only a full journaling).', points: 3 },
      ],
    },
    {
      id: 30,
      title: 'Typy úložišť, RAID, způsob alokace dat souborů',
      questions: [
        { text: 'Popis typů úložišť (DAS, NAS, SAN) s příklady.', points: 3 },
        { text: 'RAID 0: způsob zapojení, minimální počet disků, princip ukládání dat, odolnost, rychlost R/W.', points: 3 },
        { text: 'RAID 1: způsob zapojení, minimální počet disků, princip ukládání dat, odolnost, rychlost R/W.', points: 3 },
        { text: 'RAID 5: způsob zapojení, minimální počet disků, princip ukládání dat, odolnost, rychlost R/W.', points: 3 },
        { text: 'Charakteristika možných způsobů alokace dat pro soubory (spojitá, s propojovacím seznamem, indexovaná/inode).', points: 3 },
      ],
    },
    {
      id: 31,
      title: 'Vzdálený přístup k OS, telnet, SSH, autentizace, autorizace, zásady tvorby hesla, typy útoků na systém a prevence',
      questions: [
        { text: 'Definice pojmů autentizace a autorizace.', points: 2 },
        { text: 'Možné metody autentizace (alespoň čtyři).', points: 2 },
        { text: 'Popis principu zabezpečení přihlašování pomocí protokolu SSH (asymetrická kryptografie, výměna klíčů).', points: 3 },
        { text: 'Riziko přihlašování pomocí protokolu SSH a jak mu předcházet (útok MITM, ověření fingerprintu).', points: 4 },
        { text: 'Zásady tvorby hesla (čtyři nejdůležitější).', points: 2 },
        { text: 'Popis alespoň čtyř typů útoků na systém.', points: 2 },
      ],
    },
  ];

  let currentTopics = [];

  function pts(n) {
    if (n === 1) return '1 bod';
    if (n < 5) return `${n} body`;
    return `${n} bodů`;
  }

  function shuffleArr(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function renderExam(topics) {
    currentTopics = topics;
    const container = document.getElementById('test-questions-container');
    container.innerHTML = topics.map((topic, ti) => `
      <div class="topic-card">
        <div class="topic-header">
          <div class="topic-num">Otázka ${ti + 1} z 4</div>
          <h2>${escHtml(topic.title)}</h2>
        </div>
        <div class="topic-body">
          ${topic.questions.map((q, qi) => `
            ${qi > 0 ? '<hr class="divider">' : ''}
            <div class="sub-question">
              <label for="ta_${topic.id}_${qi}">
                <span>${escHtml(q.text)}</span>
                <span class="badge">${pts(q.points)}</span>
              </label>
              <textarea id="ta_${topic.id}_${qi}" placeholder="Tvoje odpověď…"></textarea>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
    document.getElementById('test-view-exam').style.display = '';
    document.getElementById('test-view-result').style.display = 'none';
  }

  function newTest() {
    const picked = shuffleArr(TOPICS).slice(0, 4);
    renderExam(picked);
    const page = document.getElementById('page-test');
    page.scrollIntoView({ behavior: 'smooth' });
  }

  function submitTest() {
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    const ts = `${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
    const filename = `pokus_${ts}.json`;

    const result = {
      submitted_at: now.toLocaleString('cs-CZ'),
      questions: currentTopics.map((topic, ti) => ({
        topic_id: topic.id,
        topic_title: topic.title,
        sub_questions: topic.questions.map((q, qi) => ({
          question: q.text,
          points_max: q.points,
          answer: (document.getElementById(`ta_${topic.id}_${qi}`)?.value ?? '').trim(),
        })),
      })),
    };

    const blob = new Blob([JSON.stringify(result, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);

    document.getElementById('test-result-filename').textContent = filename;
    renderReview(result);
    document.getElementById('test-view-exam').style.display = 'none';
    document.getElementById('test-view-result').style.display = '';
    const page = document.getElementById('page-test');
    page.scrollIntoView({ behavior: 'smooth' });
  }

  function renderReview(result) {
    const container = document.getElementById('test-review-container');
    container.innerHTML = result.questions.map((t, ti) => `
      <div class="review-card">
        <div class="review-topic-header">Otázka ${ti + 1}: ${escHtml(t.topic_title)}</div>
        <div class="review-body">
          ${t.sub_questions.map(sq => `
            <div class="review-q">
              <div class="q-text">
                <span>${escHtml(sq.question)}</span>
                <span class="badge">${pts(sq.points_max)}</span>
              </div>
              ${sq.answer
                ? `<div class="a-text">${escHtml(sq.answer)}</div>`
                : `<div class="a-empty">(bez odpovědi)</div>`}
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  function buildDOM() {
    const page = document.getElementById('page-test');
    page.innerHTML = `
      <!-- EXAM VIEW -->
      <div id="test-view-exam">
        <div class="test-header">
          <h2>OS – Cvičný test</h2>
          <p>Níže jsou 4 náhodně vybrané okruhy. Odpověz na všechny dílčí otázky a pak klikni na <strong>Odevzdat</strong>.</p>
        </div>
        <div id="test-questions-container"></div>
        <div class="test-actions">
          <button class="btn btn-secondary" id="test-btn-new">&#8635; Jiné otázky</button>
          <button class="btn btn-primary" id="test-btn-submit">&#10003; Odevzdat test</button>
        </div>
      </div>

      <!-- RESULT VIEW -->
      <div id="test-view-result" style="display:none">
        <div class="test-header">
          <h2>OS – Cvičný test</h2>
          <p>Odpovědi uloženy</p>
        </div>
        <div class="success-box">
          <div class="success-icon">✅</div>
          <h2>Test odevzdán!</h2>
          <p>JSON soubor byl stažen do tvých Stažených souborů:</p>
          <span class="filename" id="test-result-filename"></span>
        </div>
        <div class="ai-hint">
          <strong>Jak nechat test obodovat AI:</strong><br>
          Obsah staženého JSON souboru zkopíruj do chatbotu a přidej pokyn:<br><br>
          <em>„Jsi zkoušející z předmětu Operační systémy na VŠ. Ohodnoť níže přiložené odpovědi ke zkušebním otázkám. Pro každou dílčí otázku uveď: <strong>počet přidělených bodů / maximální počet bodů</strong> a krátké zdůvodnění. Celkové skóre shrň na konci."</em>
        </div>
        <div id="test-review-container"></div>
        <div class="test-actions">
          <button class="btn btn-primary" id="test-btn-new-result">&#8635; Nový test</button>
        </div>
      </div>
    `;
  }

  function bindEvents() {
    document.getElementById('test-btn-new').addEventListener('click', newTest);
    document.getElementById('test-btn-submit').addEventListener('click', submitTest);
    document.getElementById('test-btn-new-result').addEventListener('click', newTest);
  }

  function init() {
    buildDOM();
    bindEvents();
    newTest();
  }

  function destroy() {
    // No keyboard listeners to remove
  }

  window.Router.registerModule('test', { init, destroy });
})();
