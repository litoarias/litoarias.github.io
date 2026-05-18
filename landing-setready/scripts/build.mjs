import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = new URL("..", import.meta.url).pathname;

const app = {
  shortName: "SetReady",
  appName: "SetReady: Adaptive Rest Timer",
  bundleId: "com.litoarias.SetReady",
  appStoreId: "6770435744",
  appStoreUrl: "https://apps.apple.com/app/id6770435744",
  baseUrl: "https://litoarias.github.io/landing-setready/",
  supportEmail: "lito.airas.cervero@gmail.com",
  fallbackVersion: "1.0",
  fallbackMinOS: "iOS 18.6+",
  fallbackWatchOS: "watchOS 10.6+",
  fallbackPrice: "Free with optional SetReady Pro",
  languagesCount: "9"
};

const languages = [
  { code: "en", dir: "", html: "en", short: "EN", label: "English", locale: "en_US" },
  { code: "es", dir: "es", html: "es", short: "ES", label: "Español", locale: "es_ES" },
  { code: "de", dir: "de", html: "de", short: "DE", label: "Deutsch", locale: "de_DE" },
  { code: "fr", dir: "fr", html: "fr", short: "FR", label: "Français", locale: "fr_FR" },
  { code: "it", dir: "it", html: "it", short: "IT", label: "Italiano", locale: "it_IT" },
  { code: "ja", dir: "ja", html: "ja", short: "JA", label: "日本語", locale: "ja_JP" },
  { code: "ko", dir: "ko", html: "ko", short: "KO", label: "한국어", locale: "ko_KR" },
  { code: "pt-BR", dir: "pt", html: "pt-BR", short: "PT", label: "Português", locale: "pt_BR" },
  { code: "zh-Hans", dir: "zh", html: "zh-Hans", short: "ZH", label: "简体中文", locale: "zh_CN" }
];

const t = {
  en: {
    metaTitle: "SetReady: Adaptive Rest Timer - Apple Watch recovery timer",
    metaDescription: "SetReady turns Apple Watch heart-rate recovery into smarter rest timing for strength, hypertrophy and conditioning sessions.",
    navFeatures: "Features",
    navSystem: "Recovery system",
    navPricing: "Pro",
    navSupport: "Support",
    navPrivacy: "Privacy",
    navTerms: "Terms",
    download: "Open App Store",
    badge: "Apple Watch strength training",
    heroTitle: "SetReady",
    heroKicker: "Adaptive Rest Timer",
    heroText: "Start on Apple Watch, train on rhythm, and let your heart-rate recovery shape the next set. SetReady keeps rest, readiness and performance history in one focused training cockpit.",
    ctaPrimary: "Download on the App Store",
    ctaSecondary: "See the recovery flow",
    storeSourceFallback: "Fallback App Store data",
    storeSourceLive: "Live App Store data",
    statRating: "Rating",
    statVersion: "Version",
    statPrice: "Price",
    statRequires: "Requires",
    statLanguages: "Languages",
    ratingFallback: "New",
    liveBadge: "LIVE SESSION",
    watchRequired: "Apple Watch required",
    heroMetricBpm: "BPM",
    heroMetricRest: "Rest window",
    heroMetricGate: "Ready gate",
    heroMetricNext: "Next set",
    heroReady: "Ready",
    featuresEyebrow: "Built for lifters who track recovery",
    featuresTitle: "Rest timing that responds to your body",
    featuresText: "SetReady is not a generic interval timer. It reads training context, heart-rate drop and your selected profile before marking the next set ready.",
    feature1Title: "Watch-first capture",
    feature1Text: "Start the session on Apple Watch to capture heart rate, sets, rest and recovery without carrying your phone around the gym.",
    feature2Title: "Adaptive rest windows",
    feature2Text: "Strength, hypertrophy and conditioning profiles tune minimum rest, recovery targets and readiness gates.",
    feature3Title: "Heart-rate recovery",
    feature3Text: "After each set, SetReady follows how quickly your heart rate drops and adjusts the timer with clear, readable signals.",
    feature4Title: "iPhone dashboard",
    feature4Text: "Mirror the live workout to iPhone for larger controls, metrics and a full view of the current training state.",
    feature5Title: "Workout history",
    feature5Text: "Keep completed sessions, monthly calendars, weekly stats and detailed recovery timelines.",
    feature6Title: "Shareable reports",
    feature6Text: "Export clean performance summaries with sets, rest, heart rate and recovery for coaching or your own review.",
    systemEyebrow: "Recovery system",
    systemTitle: "Three signals before the next set",
    systemText: "SetReady waits for minimum rest, watches heart-rate drop and applies your readiness gate. The result is a timer that adapts without hiding the reasoning.",
    signal1Title: "Minimum rest",
    signal1Text: "Your profile protects the baseline rest you need before checking recovery.",
    signal2Title: "HR drop",
    signal2Text: "Apple Watch heart-rate samples show whether your body is settling quickly or needs more time.",
    signal3Title: "Ready gate",
    signal3Text: "The next set is marked ready only when the recovery target and stability window are met.",
    proEyebrow: "SetReady Pro",
    proTitle: "Unlock deeper training memory",
    proText: "SetReady includes core workout guidance. Pro expands the system for athletes who want unlimited history, trends and advanced rest tuning.",
    planMonthly: "Monthly",
    planMonthlyText: "Flexible access for active blocks.",
    planYearly: "Yearly",
    planYearlyText: "Best value for continuous training.",
    planLifetime: "Lifetime",
    planLifetimeText: "One-time unlock for current and future Pro tools.",
    bestValue: "Best value",
    proFeature1: "Unlimited workout history",
    proFeature2: "Recovery and load trends",
    proFeature3: "Advanced adaptive rest controls",
    proFeature4: "Performance report export",
    privacyStripTitle: "Private by design, measurable by Firebase Analytics",
    privacyStripText: "Health and workout data stay on device and in Apple Health. Firebase Analytics and Crashlytics are used for anonymous usage patterns, stability and product quality. SetReady does not use AdMob or advertising SDKs.",
    learnPrivacy: "Read privacy policy",
    faqTitle: "Questions athletes ask",
    faq: [
      ["Do I need Apple Watch?", "Yes. SetReady is built around Apple Watch heart-rate capture during training. iPhone mirrors the session and stores history."],
      ["Is SetReady medical advice?", "No. SetReady provides workout timing guidance only. It does not diagnose health, cardiac fitness or medical conditions."],
      ["Where is my health data stored?", "Health data remains on your device and within Apple's HealthKit ecosystem. SetReady does not sell health information."],
      ["Does the app show ads?", "No. SetReady is built around subscriptions and optional lifetime unlocks, not advertising."]
    ],
    footerTagline: "Adaptive rest timing for Apple Watch strength training.",
    supportTitle: "Support",
    supportSubtitle: "Tell us what happened and which device you trained with. The support form tags every message with SetReady so app communications stay separated.",
    contactTitle: "Contact support",
    contactText: "Send a message and we will get back to you as soon as possible.",
    name: "Name",
    email: "Email",
    topic: "Topic",
    message: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "Describe the issue, question or feature request...",
    topicOptions: ["General Question", "Bug Report", "Feature Request", "Subscription Issue", "Apple Watch Sync", "Privacy Request"],
    send: "Send message",
    sending: "Sending...",
    sentTitle: "Message sent",
    sentText: "Thanks. We will reply within 24-48 hours.",
    sendAnother: "Send another message",
    tooMany: "Too many messages sent. Please wait before trying again.",
    errorText: "The message could not be sent. Please try again later.",
    supportFaqTitle: "Quick answers",
    supportFaq: [
      ["How do I start a workout?", "Open SetReady on Apple Watch and start the session there. Keep the Watch nearby and iPhone will mirror the workout."],
      ["How do I restore Pro?", "Open the Pro screen and use Restore Purchases. Purchases are handled by Apple's App Store."],
      ["Why is recovery not measured?", "Make sure Apple Watch can read heart rate during training and that Health permissions are enabled."]
    ],
    privacyTitle: "Privacy Policy",
    privacyUpdated: "Last updated: May 18, 2026",
    privacyIntro: "SetReady is designed around local workout guidance. This policy explains what data is processed when you use the app, the website and support form.",
    privacySections: [
      ["Overview", "SetReady uses Apple Watch and HealthKit data to guide rest timing. Workout and health data are processed on your devices unless you choose to share a support message or an exported report. We do not sell personal data."],
      ["HealthKit and Apple Watch", "SetReady reads heart rate and workout information through Apple's HealthKit permissions and can save SetReady workouts started on Apple Watch. This information is used for live training guidance, recovery calculations, workout history and performance summaries."],
      ["Local workout history", "Completed sessions, rest events, set counts, recovery samples and related preferences are stored on device using Apple's app storage frameworks. If your device syncs or backs up through Apple services, Apple controls that processing under Apple's policies."],
      ["Firebase Analytics and Crashlytics", "SetReady uses Firebase Analytics to understand anonymous usage patterns such as screens viewed and feature interactions, and Firebase Crashlytics to diagnose crashes. Firebase may process device, app, event, diagnostic and app-instance identifiers. We do not use Firebase to collect HealthKit heart-rate values or workout contents."],
      ["No advertising SDKs", "SetReady does not use Google AdMob, advertising SDKs or ad tracking for personalized ads. The app is supported by optional SetReady Pro subscriptions and a lifetime unlock handled by Apple's StoreKit."],
      ["Purchases", "Subscriptions and lifetime purchases are processed by Apple through the App Store. SetReady receives entitlement status needed to unlock Pro features, but does not receive your full payment card details."],
      ["Support messages", "If you contact us through the website, the form sends your name, email, topic, message and the hidden APP_NAME value through EmailJS so we can identify the app and reply. Do not include sensitive medical information in support messages."],
      ["Retention and rights", "Local workout data stays on your device until you delete it or delete the app. Firebase analytics and crash data are retained according to Firebase/Google settings and policies. You can request support-message deletion by contacting us."]
    ],
    privacyLinksTitle: "Relevant service policies",
    privacyLinks: [
      ["Apple Privacy", "https://www.apple.com/legal/privacy/"],
      ["Google Privacy Policy", "https://policies.google.com/privacy"],
      ["Firebase privacy and security", "https://firebase.google.com/support/privacy"],
      ["EmailJS Privacy Policy", "https://www.emailjs.com/legal/privacy-policy/"]
    ],
    termsTitle: "Terms of Use",
    termsUpdated: "Last updated: May 18, 2026",
    termsIntro: "These terms govern your use of SetReady, the SetReady website and related support channels.",
    termsSections: [
      ["Use of SetReady", "SetReady helps time rest during workouts using Apple Watch heart-rate data, training profiles and user settings. You are responsible for deciding whether a workout or rest recommendation is appropriate for your condition and environment."],
      ["Health disclaimer", "SetReady is not a medical device and does not provide medical advice, diagnosis or treatment. Stop exercising and seek professional medical help if you feel pain, dizziness, shortness of breath or any concerning symptom."],
      ["Apple Watch requirement", "The core live workout experience requires Apple Watch heart-rate capture and the relevant Health permissions. Some iPhone views depend on data synced from Apple Watch."],
      ["SetReady Pro", "SetReady Pro may be offered as monthly, yearly or lifetime access. Auto-renewable subscriptions renew through Apple unless cancelled in App Store settings at least 24 hours before the end of the current period. Prices and availability may vary by region."],
      ["Acceptable use", "Do not misuse the website, support form or app, attempt to disrupt services, reverse engineer protected parts of the app, or submit unlawful, abusive or misleading support content."],
      ["Third-party services", "SetReady relies on Apple frameworks for HealthKit, StoreKit and platform services. The website support form uses EmailJS. Firebase Analytics and Crashlytics may be used for app quality and diagnostics."],
      ["Changes", "We may update the app, website, pricing, features or these terms. Continued use after changes means you accept the updated terms."],
      ["Contact", `Questions about these terms can be sent through the support page or to ${app.supportEmail}.`]
    ]
  },
  es: {
    metaTitle: "SetReady: Adaptive Rest Timer - temporizador de recuperación para Apple Watch",
    metaDescription: "SetReady convierte la recuperación de frecuencia cardiaca del Apple Watch en descansos más inteligentes para fuerza, hipertrofia y acondicionamiento.",
    navFeatures: "Funciones",
    navSystem: "Recuperación",
    navPricing: "Pro",
    navSupport: "Soporte",
    navPrivacy: "Privacidad",
    navTerms: "Términos",
    download: "Abrir App Store",
    badge: "Entrenamiento de fuerza con Apple Watch",
    heroTitle: "SetReady",
    heroKicker: "Adaptive Rest Timer",
    heroText: "Empieza en el Apple Watch, entrena con ritmo y deja que tu recuperación cardiaca marque la siguiente serie. SetReady reúne descanso, preparación e historial en un cockpit de entrenamiento enfocado.",
    ctaPrimary: "Descargar en App Store",
    ctaSecondary: "Ver el flujo de recuperación",
    storeSourceFallback: "Datos de App Store de respaldo",
    storeSourceLive: "Datos reales de App Store",
    statRating: "Valoración",
    statVersion: "Versión",
    statPrice: "Precio",
    statRequires: "Requiere",
    statLanguages: "Idiomas",
    ratingFallback: "Nueva",
    liveBadge: "SESIÓN EN DIRECTO",
    watchRequired: "Apple Watch requerido",
    heroMetricBpm: "PPM",
    heroMetricRest: "Descanso",
    heroMetricGate: "Puerta ready",
    heroMetricNext: "Siguiente serie",
    heroReady: "Lista",
    featuresEyebrow: "Para atletas que miran la recuperación",
    featuresTitle: "Descansos que responden a tu cuerpo",
    featuresText: "SetReady no es un temporizador genérico. Lee el contexto del entreno, la bajada de pulsaciones y tu perfil antes de marcar la siguiente serie.",
    feature1Title: "Captura desde el Watch",
    feature1Text: "Inicia la sesión en Apple Watch para registrar frecuencia cardiaca, series, descansos y recuperación sin llevar el iPhone por el gimnasio.",
    feature2Title: "Descansos adaptativos",
    feature2Text: "Los perfiles de fuerza, hipertrofia y acondicionamiento ajustan descanso mínimo, objetivos de recuperación y puertas de preparación.",
    feature3Title: "Recuperación cardiaca",
    feature3Text: "Después de cada serie, SetReady sigue la velocidad a la que bajan tus pulsaciones y ajusta el temporizador con señales claras.",
    feature4Title: "Dashboard en iPhone",
    feature4Text: "Replica el entreno en directo en el iPhone para controles grandes, métricas y una vista completa del estado de la sesión.",
    feature5Title: "Historial de entrenos",
    feature5Text: "Guarda sesiones completadas, calendarios mensuales, estadísticas semanales y cronologías detalladas de recuperación.",
    feature6Title: "Informes compartibles",
    feature6Text: "Exporta resúmenes limpios con series, descansos, frecuencia cardiaca y recuperación para tu entrenador o revisión propia.",
    systemEyebrow: "Sistema de recuperación",
    systemTitle: "Tres señales antes de la siguiente serie",
    systemText: "SetReady espera el descanso mínimo, observa la bajada de pulsaciones y aplica tu puerta de preparación. El resultado es un timer adaptativo y transparente.",
    signal1Title: "Descanso mínimo",
    signal1Text: "Tu perfil protege el descanso base que necesitas antes de comprobar la recuperación.",
    signal2Title: "Bajada de PPM",
    signal2Text: "Las muestras del Apple Watch muestran si tu cuerpo se estabiliza rápido o necesita más tiempo.",
    signal3Title: "Puerta ready",
    signal3Text: "La siguiente serie solo queda lista cuando se cumplen el objetivo de recuperación y la ventana de estabilidad.",
    proEyebrow: "SetReady Pro",
    proTitle: "Desbloquea memoria profunda de entrenamiento",
    proText: "SetReady incluye guía base de entreno. Pro amplía el sistema para atletas que quieren historial ilimitado, tendencias y ajustes avanzados.",
    planMonthly: "Mensual",
    planMonthlyText: "Acceso flexible para bloques activos.",
    planYearly: "Anual",
    planYearlyText: "Mejor valor para entrenar todo el año.",
    planLifetime: "De por vida",
    planLifetimeText: "Pago único para herramientas Pro actuales y futuras.",
    bestValue: "Mejor valor",
    proFeature1: "Historial ilimitado",
    proFeature2: "Tendencias de recuperación y carga",
    proFeature3: "Controles avanzados de descanso",
    proFeature4: "Exportación de informes",
    privacyStripTitle: "Privacidad local, medición con Firebase Analytics",
    privacyStripText: "Los datos de salud y entreno permanecen en el dispositivo y en Apple Health. Firebase Analytics y Crashlytics se usan para patrones anónimos de uso, estabilidad y calidad. SetReady no usa AdMob ni SDKs publicitarios.",
    learnPrivacy: "Leer privacidad",
    faqTitle: "Preguntas habituales",
    faq: [
      ["¿Necesito Apple Watch?", "Sí. SetReady se basa en la captura de frecuencia cardiaca del Apple Watch durante el entreno. El iPhone replica la sesión y guarda el historial."],
      ["¿SetReady da consejo médico?", "No. SetReady solo ofrece guía de tiempos de entrenamiento. No diagnostica salud, forma cardiaca ni condiciones médicas."],
      ["¿Dónde se guardan mis datos?", "Los datos de salud permanecen en tu dispositivo y dentro de HealthKit de Apple. SetReady no vende información de salud."],
      ["¿La app muestra anuncios?", "No. SetReady se basa en suscripciones y desbloqueo de por vida opcional, no en publicidad."]
    ],
    footerTagline: "Descanso adaptativo para entrenamiento de fuerza con Apple Watch.",
    supportTitle: "Soporte",
    supportSubtitle: "Cuéntanos qué ocurrió y con qué dispositivo entrenaste. El formulario etiqueta cada mensaje con SetReady para separar las comunicaciones por app.",
    contactTitle: "Contactar soporte",
    contactText: "Envía un mensaje y responderemos lo antes posible.",
    name: "Nombre",
    email: "Email",
    topic: "Tema",
    message: "Mensaje",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "tu@ejemplo.com",
    messagePlaceholder: "Describe el problema, pregunta o sugerencia...",
    topicOptions: ["Pregunta general", "Error", "Sugerencia", "Suscripción", "Sincronización Apple Watch", "Solicitud de privacidad"],
    send: "Enviar mensaje",
    sending: "Enviando...",
    sentTitle: "Mensaje enviado",
    sentText: "Gracias. Responderemos en 24-48 horas.",
    sendAnother: "Enviar otro mensaje",
    tooMany: "Demasiados mensajes enviados. Espera antes de intentarlo de nuevo.",
    errorText: "No se pudo enviar el mensaje. Inténtalo más tarde.",
    supportFaqTitle: "Respuestas rápidas",
    supportFaq: [
      ["¿Cómo inicio un entreno?", "Abre SetReady en el Apple Watch e inicia la sesión ahí. Mantén el Watch cerca y el iPhone replicará el entreno."],
      ["¿Cómo restauro Pro?", "Abre la pantalla Pro y usa Restaurar compras. Las compras las gestiona App Store."],
      ["¿Por qué no se mide la recuperación?", "Asegúrate de que Apple Watch pueda leer pulsaciones durante el entreno y de que Salud tenga permisos."]
    ],
    privacyTitle: "Política de privacidad",
    privacyUpdated: "Última actualización: 18 de mayo de 2026",
    privacyIntro: "SetReady está diseñado alrededor de guía local de entrenamiento. Esta política explica qué datos se procesan al usar la app, la web y el soporte.",
    privacySections: [
      ["Resumen", "SetReady usa datos de Apple Watch y HealthKit para guiar los descansos. Los datos de salud y entreno se procesan en tus dispositivos salvo que decidas enviar un mensaje de soporte o compartir un informe exportado. No vendemos datos personales."],
      ["HealthKit y Apple Watch", "SetReady lee frecuencia cardiaca e información de entrenos mediante permisos de HealthKit y puede guardar entrenos iniciados en Apple Watch. Esta información se usa para guía en directo, cálculos de recuperación, historial e informes."],
      ["Historial local", "Las sesiones completadas, eventos de descanso, series, muestras de recuperación y preferencias se guardan en el dispositivo con frameworks de Apple. Si el dispositivo sincroniza o respalda mediante servicios de Apple, Apple controla ese tratamiento."],
      ["Firebase Analytics y Crashlytics", "SetReady usa Firebase Analytics para entender patrones anónimos de uso como pantallas visitadas e interacción con funciones, y Firebase Crashlytics para diagnosticar fallos. Firebase puede procesar datos de dispositivo, app, eventos, diagnósticos e identificadores de instancia. No usamos Firebase para recopilar valores de frecuencia cardiaca ni contenido de entrenos."],
      ["Sin SDKs publicitarios", "SetReady no usa Google AdMob, SDKs publicitarios ni seguimiento para anuncios personalizados. La app se sostiene con suscripciones opcionales de SetReady Pro y desbloqueo de por vida gestionados por StoreKit de Apple."],
      ["Compras", "Las suscripciones y compras de por vida las procesa Apple a través de App Store. SetReady recibe el estado de derecho necesario para desbloquear Pro, pero no tus datos completos de tarjeta."],
      ["Mensajes de soporte", "Si contactas desde la web, el formulario envía nombre, email, tema, mensaje y el valor oculto APP_NAME mediante EmailJS para identificar la app y responder. No incluyas información médica sensible en soporte."],
      ["Retención y derechos", "Los datos locales permanecen en tu dispositivo hasta que los elimines o borres la app. Los datos de Firebase se conservan según la configuración y políticas de Google/Firebase. Puedes solicitar la eliminación de mensajes de soporte contactándonos."]
    ],
    privacyLinksTitle: "Políticas de servicios relevantes",
    privacyLinks: [
      ["Privacidad de Apple", "https://www.apple.com/legal/privacy/"],
      ["Privacidad de Google", "https://policies.google.com/privacy"],
      ["Privacidad y seguridad de Firebase", "https://firebase.google.com/support/privacy"],
      ["Privacidad de EmailJS", "https://www.emailjs.com/legal/privacy-policy/"]
    ],
    termsTitle: "Términos de uso",
    termsUpdated: "Última actualización: 18 de mayo de 2026",
    termsIntro: "Estos términos regulan el uso de SetReady, la web de SetReady y los canales de soporte relacionados.",
    termsSections: [
      ["Uso de SetReady", "SetReady ayuda a temporizar descansos durante entrenos usando frecuencia cardiaca del Apple Watch, perfiles y ajustes del usuario. Tú decides si un entreno o recomendación de descanso es adecuada para tu condición y entorno."],
      ["Aviso de salud", "SetReady no es un dispositivo médico ni proporciona consejo, diagnóstico o tratamiento médico. Deja de entrenar y busca ayuda profesional si notas dolor, mareo, falta de aire o cualquier síntoma preocupante."],
      ["Requisito de Apple Watch", "La experiencia principal de entreno en directo requiere captura de frecuencia cardiaca del Apple Watch y permisos de Salud. Algunas vistas de iPhone dependen de datos sincronizados desde el Watch."],
      ["SetReady Pro", "SetReady Pro puede ofrecerse como acceso mensual, anual o de por vida. Las suscripciones renovables se renuevan a través de Apple salvo cancelación en App Store al menos 24 horas antes del final del periodo actual. Precios y disponibilidad pueden variar por región."],
      ["Uso aceptable", "No abuses de la web, formulario o app, no intentes interrumpir servicios, aplicar ingeniería inversa a partes protegidas ni enviar contenido ilegal, abusivo o engañoso."],
      ["Servicios de terceros", "SetReady depende de frameworks de Apple para HealthKit, StoreKit y servicios de plataforma. El formulario usa EmailJS. Firebase Analytics y Crashlytics pueden usarse para calidad y diagnóstico."],
      ["Cambios", "Podemos actualizar la app, web, precios, funciones o estos términos. El uso continuado tras los cambios implica aceptación."],
      ["Contacto", `Las preguntas sobre estos términos pueden enviarse desde soporte o a ${app.supportEmail}.`]
    ]
  },
  it: {
    storeSourceFallback: "Dati App Store di fallback",
    storeSourceLive: "Dati App Store live",
    statRating: "Valutazione",
    statVersion: "Versione",
    statPrice: "Prezzo",
    statRequires: "Richiede",
    statLanguages: "Lingue",
    ratingFallback: "Nuova",
    liveBadge: "SESSIONE LIVE",
    watchRequired: "Apple Watch richiesto",
    heroMetricBpm: "BPM",
    heroMetricRest: "Riposo",
    heroMetricGate: "Soglia ready",
    heroMetricNext: "Prossima serie",
    heroReady: "Pronto",
    featuresEyebrow: "Per chi allena e misura il recupero",
    feature1Title: "Apple Watch prima",
    feature1Text: "Avvia la sessione su Apple Watch per registrare frequenza cardiaca, serie, pause e recupero senza portare l'iPhone in giro.",
    feature2Title: "Pause adattive",
    feature2Text: "Profili forza, ipertrofia e conditioning regolano riposo minimo, obiettivi di recupero e soglia di prontezza.",
    feature3Title: "Recupero cardiaco",
    feature3Text: "Dopo ogni serie, SetReady segue la discesa della frequenza cardiaca e adatta il timer con segnali chiari.",
    feature4Title: "Dashboard iPhone",
    feature4Text: "Replica l'allenamento live su iPhone con controlli piu grandi, metriche e stato completo.",
    feature5Title: "Storico allenamenti",
    feature5Text: "Conserva sessioni completate, calendari mensili, statistiche settimanali e timeline di recupero.",
    feature6Title: "Report condivisibili",
    feature6Text: "Esporta riepiloghi con serie, pause, frequenza cardiaca e recupero.",
    systemEyebrow: "Sistema di recupero",
    systemTitle: "Tre segnali prima della prossima serie",
    systemText: "SetReady aspetta il riposo minimo, osserva il calo cardiaco e applica la soglia ready.",
    signal1Title: "Riposo minimo",
    signal1Text: "Il profilo protegge la pausa di base prima di valutare il recupero.",
    signal2Title: "Calo FC",
    signal2Text: "I campioni Apple Watch indicano se il corpo si stabilizza rapidamente o ha bisogno di tempo.",
    signal3Title: "Soglia ready",
    signal3Text: "La serie successiva e pronta solo quando obiettivo e stabilita sono raggiunti.",
    proTitle: "Sblocca una memoria di allenamento piu profonda",
    proText: "Pro aggiunge storico illimitato, trend e controlli avanzati di riposo.",
    planMonthly: "Mensile",
    planMonthlyText: "Accesso flessibile per blocchi attivi.",
    planYearly: "Annuale",
    planYearlyText: "Miglior valore per allenarsi tutto l'anno.",
    planLifetime: "A vita",
    planLifetimeText: "Sblocco unico degli strumenti Pro.",
    bestValue: "Miglior valore",
    proFeature1: "Storico illimitato",
    proFeature2: "Trend recupero e carico",
    proFeature3: "Controlli avanzati di riposo",
    proFeature4: "Export report",
    privacyStripTitle: "Privato in locale, misurato con Firebase Analytics",
    learnPrivacy: "Leggi privacy",
    faqTitle: "Domande frequenti",
    faq: [
      ["Serve Apple Watch?", "Si. SetReady usa la frequenza cardiaca di Apple Watch durante l'allenamento."],
      ["SetReady e un consiglio medico?", "No. Fornisce solo guida sui tempi di allenamento."],
      ["Dove restano i dati?", "I dati salute restano sul dispositivo e in Apple Health."],
      ["Ci sono annunci?", "No. SetReady usa Pro e sblocco a vita opzionale, non pubblicita."]
    ],
    topicOptions: ["Domanda generale", "Bug", "Richiesta funzione", "Problema abbonamento", "Sync Apple Watch", "Richiesta privacy"],
    emailPlaceholder: "tu@esempio.com",
    sending: "Invio...",
    sentText: "Grazie. Risponderemo entro 24-48 ore.",
    sendAnother: "Invia un altro messaggio",
    tooMany: "Troppi messaggi inviati. Attendi prima di riprovare.",
    errorText: "Impossibile inviare il messaggio.",
    supportFaqTitle: "Risposte rapide",
    supportFaq: [
      ["Come avvio un allenamento?", "Apri SetReady su Apple Watch e avvia la sessione li."],
      ["Come ripristino Pro?", "Apri la schermata Pro e usa Ripristina acquisti."],
      ["Perche il recupero non viene misurato?", "Controlla lettura cardiaca e permessi Salute."]
    ],
    privacyLinksTitle: "Policy dei servizi",
    privacyLinks: [
      ["Privacy Apple", "https://www.apple.com/legal/privacy/"],
      ["Privacy Google", "https://policies.google.com/privacy"],
      ["Privacy e sicurezza Firebase", "https://firebase.google.com/support/privacy"],
      ["Privacy EmailJS", "https://www.emailjs.com/legal/privacy-policy/"]
    ],
    privacySections: [
      ["Panoramica", "SetReady usa Apple Watch e HealthKit per guidare i tempi di riposo. I dati salute e allenamento sono trattati sui tuoi dispositivi salvo condivisione volontaria."],
      ["HealthKit e Apple Watch", "SetReady legge frequenza cardiaca e informazioni di allenamento tramite permessi HealthKit e puo salvare sessioni avviate su Apple Watch."],
      ["Storico locale", "Sessioni, pause, serie, campioni di recupero e preferenze sono salvati localmente con framework Apple."],
      ["Firebase Analytics e Crashlytics", "SetReady usa Firebase Analytics per pattern anonimi e Crashlytics per diagnosi crash. Firebase puo trattare dati dispositivo, app, eventi, diagnostica e identificatori istanza, ma non valori cardiaci HealthKit o contenuti allenamento."],
      ["Nessuna pubblicita", "SetReady non usa Google AdMob, SDK pubblicitari o tracking per annunci personalizzati."],
      ["Acquisti", "Abbonamenti e acquisti a vita sono gestiti da Apple tramite App Store; SetReady riceve solo lo stato di accesso."],
      ["Supporto", "Il modulo invia nome, email, tema, messaggio e APP_NAME tramite EmailJS per identificare l'app."],
      ["Conservazione e diritti", "I dati locali restano sul dispositivo finche non li elimini. I dati Firebase seguono impostazioni e policy Google/Firebase."]
    ],
    termsSections: [
      ["Uso di SetReady", "SetReady aiuta a temporizzare le pause usando frequenza cardiaca Apple Watch, profili e impostazioni."],
      ["Avviso salute", "SetReady non e un dispositivo medico e non fornisce diagnosi, trattamento o consigli medici."],
      ["Apple Watch richiesto", "L'esperienza live richiede frequenza cardiaca Apple Watch e permessi Salute."],
      ["SetReady Pro", "SetReady Pro puo essere mensile, annuale o a vita. Gli abbonamenti si rinnovano tramite Apple salvo annullamento."],
      ["Uso accettabile", "Non abusare di app, sito o modulo e non inviare contenuti illegali o fuorvianti."],
      ["Servizi terzi", "SetReady usa framework Apple, EmailJS per supporto e Firebase per qualita e diagnostica."],
      ["Modifiche", "Possiamo aggiornare app, sito, prezzi, funzioni o termini."],
      ["Contatto", `Domande: pagina supporto o ${app.supportEmail}.`]
    ]
  },
  ja: {
    storeSourceFallback: "App Storeフォールバックデータ",
    storeSourceLive: "App Storeライブデータ",
    statRating: "評価",
    statVersion: "バージョン",
    statPrice: "価格",
    statRequires: "要件",
    statLanguages: "言語",
    ratingFallback: "新規",
    liveBadge: "ライブセッション",
    watchRequired: "Apple Watchが必要",
    heroMetricBpm: "BPM",
    heroMetricRest: "休憩",
    heroMetricGate: "Readyゲート",
    heroMetricNext: "次のセット",
    heroReady: "Ready",
    featuresEyebrow: "回復を見ながら鍛える人へ",
    feature1Title: "Watchから記録",
    feature1Text: "Apple Watchで開始し、心拍、セット、休憩、回復をジム内で自然に記録します。",
    feature2Title: "適応型休憩",
    feature2Text: "筋力、筋肥大、コンディショニングのプロファイルで休憩と回復目標を調整します。",
    feature3Title: "心拍回復",
    feature3Text: "各セット後の心拍低下を追跡し、読みやすい信号でタイマーを調整します。",
    feature4Title: "iPhoneダッシュボード",
    feature4Text: "ライブワークアウトをiPhoneに同期し、大きな操作と指標を表示します。",
    feature5Title: "履歴",
    feature5Text: "完了したセッション、月間カレンダー、週次統計、回復タイムラインを保存します。",
    feature6Title: "共有レポート",
    feature6Text: "セット、休憩、心拍、回復をまとめたレポートをエクスポートできます。",
    systemEyebrow: "回復システム",
    systemTitle: "次のセット前に3つの信号を確認",
    systemText: "SetReadyは最小休憩、心拍低下、Readyゲートを組み合わせます。",
    signal1Title: "最小休憩",
    signal1Text: "プロファイルが回復判定前の基本休憩を守ります。",
    signal2Title: "心拍低下",
    signal2Text: "Apple Watchのサンプルが、体が落ち着いているかを示します。",
    signal3Title: "Readyゲート",
    signal3Text: "回復目標と安定時間を満たすと次のセットがReadyになります。",
    proTitle: "より深いトレーニング履歴を解除",
    proText: "Proは無制限履歴、傾向、詳細な休憩調整を追加します。",
    planMonthly: "月間",
    planMonthlyText: "必要な期間だけ柔軟に利用。",
    planYearly: "年間",
    planYearlyText: "継続トレーニングに最適。",
    planLifetime: "買い切り",
    planLifetimeText: "現在と将来のPro機能を一度で解除。",
    bestValue: "おすすめ",
    proFeature1: "無制限履歴",
    proFeature2: "回復と負荷の傾向",
    proFeature3: "高度な休憩調整",
    proFeature4: "レポート出力",
    privacyStripTitle: "ローカル中心のプライバシーとFirebase Analytics",
    learnPrivacy: "プライバシーを読む",
    faqTitle: "よくある質問",
    faq: [
      ["Apple Watchは必要ですか？", "はい。SetReadyはトレーニング中のApple Watch心拍記録を中心に作られています。"],
      ["医療アドバイスですか？", "いいえ。運動タイミングの参考のみで、診断や治療ではありません。"],
      ["データはどこに保存されますか？", "健康データは端末とApple Health内に残ります。"],
      ["広告はありますか？", "いいえ。SetReadyは広告ではなくProと買い切りで運営されます。"]
    ],
    topicOptions: ["一般的な質問", "バグ報告", "機能リクエスト", "サブスクリプション", "Apple Watch同期", "プライバシー依頼"],
    emailPlaceholder: "you@example.com",
    sending: "送信中...",
    sentText: "ありがとうございます。24-48時間以内に返信します。",
    sendAnother: "別のメッセージを送る",
    tooMany: "送信数が多すぎます。しばらく待ってください。",
    errorText: "メッセージを送信できませんでした。",
    supportFaqTitle: "クイック回答",
    supportFaq: [
      ["ワークアウト開始方法は？", "Apple WatchでSetReadyを開き、そこで開始します。"],
      ["Proを復元するには？", "Pro画面で購入を復元を使います。"],
      ["回復が測定されません", "心拍測定とヘルスケア権限を確認してください。"]
    ],
    privacyLinksTitle: "関連サービスのポリシー",
    privacyLinks: [
      ["Appleプライバシー", "https://www.apple.com/legal/privacy/"],
      ["Googleプライバシーポリシー", "https://policies.google.com/privacy"],
      ["Firebaseのプライバシーとセキュリティ", "https://firebase.google.com/support/privacy"],
      ["EmailJSプライバシー", "https://www.emailjs.com/legal/privacy-policy/"]
    ],
    privacySections: [
      ["概要", "SetReadyはApple WatchとHealthKitを使って休憩時間を案内します。健康とワークアウトデータは、明示的に共有しない限り端末上で処理されます。"],
      ["HealthKitとApple Watch", "SetReadyはHealthKit権限に基づき心拍とワークアウト情報を読み取り、Apple Watchで開始したワークアウトを保存できます。"],
      ["ローカル履歴", "完了セッション、休憩、セット、回復サンプル、設定はAppleの仕組みでローカル保存されます。"],
      ["Firebase AnalyticsとCrashlytics", "SetReadyは匿名の利用傾向にFirebase Analytics、クラッシュ診断にCrashlyticsを使います。Firebaseは端末、アプリ、イベント、診断、インスタンスIDを処理する場合がありますが、HealthKit心拍値やワークアウト内容は収集しません。"],
      ["広告なし", "SetReadyはGoogle AdMob、広告SDK、パーソナライズ広告の追跡を使いません。"],
      ["購入", "サブスクリプションと買い切りはApp Store経由でAppleが処理し、SetReadyはアクセス状態のみ受け取ります。"],
      ["サポート", "フォームは名前、メール、件名、メッセージ、APP_NAMEをEmailJSで送信します。"],
      ["保持と権利", "ローカルデータは削除するまで端末に残ります。FirebaseデータはGoogle/Firebaseの設定とポリシーに従います。"]
    ],
    termsSections: [
      ["SetReadyの利用", "SetReadyはApple Watch心拍、プロファイル、設定を使って休憩時間を案内します。"],
      ["健康に関する免責", "SetReadyは医療機器ではなく、医療助言、診断、治療を提供しません。"],
      ["Apple Watch要件", "ライブ体験にはApple Watch心拍記録とヘルスケア権限が必要です。"],
      ["SetReady Pro", "SetReady Proは月間、年間、買い切りで提供される場合があります。サブスクリプションはApple経由で更新されます。"],
      ["適切な利用", "アプリ、サイト、フォームを不正利用したり、違法または誤解を招く内容を送信しないでください。"],
      ["第三者サービス", "SetReadyはAppleフレームワーク、EmailJS、Firebase Analytics/Crashlyticsを使用する場合があります。"],
      ["変更", "アプリ、サイト、価格、機能、規約は更新される場合があります。"],
      ["連絡先", `質問はサポートページまたは${app.supportEmail}へ。`]
    ]
  }
};

const preservedLocalePatches = {
  it: t.it,
  ja: t.ja
};

const derived = {
  de: {
    metaTitle: "SetReady: Adaptive Rest Timer - Erholungstimer fur Apple Watch",
    metaDescription: "SetReady macht aus der Herzfrequenz-Erholung der Apple Watch intelligentere Pausen fur Kraft, Hypertrophie und Conditioning.",
    navFeatures: "Funktionen",
    navSystem: "Erholung",
    navPricing: "Pro",
    navSupport: "Support",
    navPrivacy: "Datenschutz",
    navTerms: "Bedingungen",
    download: "App Store offnen",
    badge: "Krafttraining mit Apple Watch",
    heroText: "Starte auf der Apple Watch, trainiere im richtigen Rhythmus und lass deine Herzfrequenz-Erholung die nachste Serie steuern.",
    ctaPrimary: "Im App Store laden",
    ctaSecondary: "Erholungsfluss ansehen",
    featuresTitle: "Pausen, die auf deinen Korper reagieren",
    featuresText: "SetReady ist kein allgemeiner Intervalltimer. Die App nutzt Trainingskontext, Herzfrequenzabfall und dein Profil.",
    privacyStripText: "Gesundheits- und Trainingsdaten bleiben auf dem Gerat und in Apple Health. Firebase Analytics und Crashlytics dienen anonymen Nutzungs- und Stabilitatsdaten. SetReady nutzt kein AdMob und keine Werbe-SDKs.",
    footerTagline: "Adaptive Pausenzeiten fur Krafttraining mit Apple Watch.",
    supportTitle: "Support",
    supportSubtitle: "Beschreibe, was passiert ist und mit welchem Gerat du trainiert hast. Jede Nachricht enthalt APP_NAME fur SetReady.",
    contactTitle: "Support kontaktieren",
    contactText: "Sende uns eine Nachricht. Wir antworten so schnell wie moglich.",
    name: "Name",
    email: "E-Mail",
    topic: "Thema",
    message: "Nachricht",
    namePlaceholder: "Dein Name",
    messagePlaceholder: "Beschreibe Problem, Frage oder Wunsch...",
    send: "Nachricht senden",
    sentTitle: "Nachricht gesendet",
    privacyTitle: "Datenschutzerklarung",
    privacyUpdated: "Zuletzt aktualisiert: 18. Mai 2026",
    privacyIntro: "Diese Richtlinie erklart, welche Daten SetReady in App, Website und Support verarbeitet.",
    termsTitle: "Nutzungsbedingungen",
    termsUpdated: "Zuletzt aktualisiert: 18. Mai 2026",
    termsIntro: "Diese Bedingungen regeln die Nutzung von SetReady, der Website und der Support-Kanale."
  },
  fr: {
    metaTitle: "SetReady: Adaptive Rest Timer - minuteur de recuperation Apple Watch",
    metaDescription: "SetReady transforme la recuperation cardiaque de l'Apple Watch en temps de repos plus intelligents pour force, hypertrophie et conditioning.",
    navFeatures: "Fonctions",
    navSystem: "Recuperation",
    navPricing: "Pro",
    navSupport: "Assistance",
    navPrivacy: "Confidentialite",
    navTerms: "Conditions",
    download: "Ouvrir l'App Store",
    badge: "Musculation avec Apple Watch",
    heroText: "Lancez la seance sur Apple Watch, gardez le rythme et laissez votre recuperation cardiaque guider la serie suivante.",
    ctaPrimary: "Telecharger sur l'App Store",
    ctaSecondary: "Voir le flux de recuperation",
    featuresTitle: "Des repos qui repondent a votre corps",
    featuresText: "SetReady n'est pas un simple minuteur. L'app lit le contexte, la baisse de frequence cardiaque et votre profil.",
    privacyStripText: "Les donnees de sante et d'entrainement restent sur l'appareil et dans Apple Health. Firebase Analytics et Crashlytics servent aux tendances anonymes, a la stabilite et a la qualite. SetReady n'utilise pas AdMob ni de SDK publicitaire.",
    footerTagline: "Temps de repos adaptatif pour la musculation avec Apple Watch.",
    supportTitle: "Assistance",
    supportSubtitle: "Expliquez ce qui s'est passe et l'appareil utilise. Chaque message inclut APP_NAME pour identifier SetReady.",
    contactTitle: "Contacter l'assistance",
    contactText: "Envoyez un message et nous repondrons des que possible.",
    name: "Nom",
    email: "Email",
    topic: "Sujet",
    message: "Message",
    namePlaceholder: "Votre nom",
    messagePlaceholder: "Decrivez le probleme, la question ou la demande...",
    send: "Envoyer",
    sentTitle: "Message envoye",
    privacyTitle: "Politique de confidentialite",
    privacyUpdated: "Derniere mise a jour : 18 mai 2026",
    privacyIntro: "Cette politique explique les donnees traitees par SetReady dans l'app, le site et l'assistance.",
    termsTitle: "Conditions d'utilisation",
    termsUpdated: "Derniere mise a jour : 18 mai 2026",
    termsIntro: "Ces conditions regissent l'utilisation de SetReady, du site et des canaux d'assistance."
  },
  it: {
    metaTitle: "SetReady: Adaptive Rest Timer - timer di recupero per Apple Watch",
    metaDescription: "SetReady trasforma il recupero cardiaco di Apple Watch in pause piu intelligenti per forza, ipertrofia e conditioning.",
    navFeatures: "Funzioni",
    navSystem: "Recupero",
    navPricing: "Pro",
    navSupport: "Supporto",
    navPrivacy: "Privacy",
    navTerms: "Termini",
    download: "Apri App Store",
    badge: "Allenamento di forza con Apple Watch",
    heroText: "Avvia su Apple Watch, allenati con ritmo e lascia che il recupero cardiaco guidi la serie successiva.",
    ctaPrimary: "Scarica da App Store",
    ctaSecondary: "Vedi il flusso di recupero",
    featuresTitle: "Pause che rispondono al tuo corpo",
    featuresText: "SetReady non e un timer generico. Legge contesto, calo cardiaco e profilo selezionato.",
    privacyStripText: "I dati di salute e allenamento restano sul dispositivo e in Apple Health. Firebase Analytics e Crashlytics servono per uso anonimo, stabilita e qualita. SetReady non usa AdMob o SDK pubblicitari.",
    footerTagline: "Riposo adattivo per allenamento di forza con Apple Watch.",
    supportTitle: "Supporto",
    supportSubtitle: "Raccontaci cosa e successo e con quale dispositivo ti sei allenato. Ogni messaggio include APP_NAME per SetReady.",
    contactTitle: "Contatta il supporto",
    contactText: "Invia un messaggio e risponderemo il prima possibile.",
    name: "Nome",
    email: "Email",
    topic: "Argomento",
    message: "Messaggio",
    namePlaceholder: "Il tuo nome",
    messagePlaceholder: "Descrivi problema, domanda o richiesta...",
    send: "Invia",
    sentTitle: "Messaggio inviato",
    privacyTitle: "Informativa sulla privacy",
    privacyUpdated: "Ultimo aggiornamento: 18 maggio 2026",
    privacyIntro: "Questa informativa spiega quali dati tratta SetReady in app, sito e supporto.",
    termsTitle: "Termini di utilizzo",
    termsUpdated: "Ultimo aggiornamento: 18 maggio 2026",
    termsIntro: "Questi termini regolano l'uso di SetReady, del sito e dei canali di supporto."
  },
  ja: {
    metaTitle: "SetReady: Adaptive Rest Timer - Apple Watch向け回復タイマー",
    metaDescription: "SetReadyはApple Watchの心拍回復を、筋力、筋肥大、コンディショニング向けの賢い休憩時間に変えます。",
    navFeatures: "機能",
    navSystem: "回復",
    navPricing: "Pro",
    navSupport: "サポート",
    navPrivacy: "プライバシー",
    navTerms: "利用規約",
    download: "App Storeを開く",
    badge: "Apple Watch筋力トレーニング",
    heroText: "Apple Watchで開始し、リズムよくトレーニング。心拍回復に合わせて次のセットを判断します。",
    ctaPrimary: "App Storeでダウンロード",
    ctaSecondary: "回復フローを見る",
    featuresTitle: "体の状態に反応する休憩タイマー",
    featuresText: "SetReadyは汎用インターバルタイマーではありません。トレーニング状況、心拍低下、選択プロファイルを読み取ります。",
    privacyStripText: "健康データとワークアウトデータは端末とApple Health内に残ります。Firebase AnalyticsとCrashlyticsは匿名の利用傾向、安定性、品質改善に使用します。SetReadyはAdMobや広告SDKを使用しません。",
    footerTagline: "Apple Watch筋力トレーニングのための適応型休憩タイマー。",
    supportTitle: "サポート",
    supportSubtitle: "発生した内容と使用デバイスをお知らせください。各メッセージにはSetReady識別用のAPP_NAMEが含まれます。",
    contactTitle: "サポートに連絡",
    contactText: "メッセージを送信してください。できるだけ早く返信します。",
    name: "名前",
    email: "メール",
    topic: "トピック",
    message: "メッセージ",
    namePlaceholder: "お名前",
    messagePlaceholder: "問題、質問、要望を入力してください...",
    send: "送信",
    sentTitle: "送信しました",
    privacyTitle: "プライバシーポリシー",
    privacyUpdated: "最終更新日: 2026年5月18日",
    privacyIntro: "このポリシーは、SetReadyのアプリ、Webサイト、サポートで処理されるデータを説明します。",
    termsTitle: "利用規約",
    termsUpdated: "最終更新日: 2026年5月18日",
    termsIntro: "本規約はSetReady、Webサイト、サポートチャネルの利用に適用されます。"
  },
  ko: {
    metaTitle: "SetReady: Adaptive Rest Timer - Apple Watch 회복 타이머",
    metaDescription: "SetReady는 Apple Watch 심박 회복을 근력, 근비대, 컨디셔닝 운동을 위한 더 똑똑한 휴식 시간으로 바꿉니다.",
    navFeatures: "기능",
    navSystem: "회복",
    navPricing: "Pro",
    navSupport: "지원",
    navPrivacy: "개인정보",
    navTerms: "약관",
    download: "App Store 열기",
    badge: "Apple Watch 근력 운동",
    heroText: "Apple Watch에서 시작하고 리듬에 맞춰 운동하세요. 심박 회복이 다음 세트 타이밍을 안내합니다.",
    ctaPrimary: "App Store에서 받기",
    ctaSecondary: "회복 흐름 보기",
    featuresTitle: "몸 상태에 반응하는 휴식 타이밍",
    featuresText: "SetReady는 일반 인터벌 타이머가 아닙니다. 운동 상황, 심박 하락, 선택한 프로필을 함께 봅니다.",
    privacyStripText: "건강 및 운동 데이터는 기기와 Apple Health에 남습니다. Firebase Analytics와 Crashlytics는 익명 사용 패턴, 안정성, 품질 개선에 사용됩니다. SetReady는 AdMob 또는 광고 SDK를 사용하지 않습니다.",
    footerTagline: "Apple Watch 근력 운동을 위한 적응형 휴식 타이밍.",
    supportTitle: "지원",
    supportSubtitle: "무슨 일이 있었는지, 어떤 기기로 운동했는지 알려주세요. 모든 메시지는 SetReady 식별용 APP_NAME을 포함합니다.",
    contactTitle: "지원 문의",
    contactText: "메시지를 보내주시면 가능한 빨리 답변하겠습니다.",
    name: "이름",
    email: "이메일",
    topic: "주제",
    message: "메시지",
    namePlaceholder: "이름",
    messagePlaceholder: "문제, 질문 또는 요청을 설명해 주세요...",
    send: "보내기",
    sentTitle: "메시지 전송됨",
    privacyTitle: "개인정보 처리방침",
    privacyUpdated: "최종 업데이트: 2026년 5월 18일",
    privacyIntro: "이 정책은 SetReady 앱, 웹사이트, 지원에서 처리되는 데이터를 설명합니다.",
    termsTitle: "이용 약관",
    termsUpdated: "최종 업데이트: 2026년 5월 18일",
    termsIntro: "본 약관은 SetReady, 웹사이트 및 지원 채널 이용에 적용됩니다."
  },
  "pt-BR": {
    metaTitle: "SetReady: Adaptive Rest Timer - timer de recuperacao para Apple Watch",
    metaDescription: "SetReady transforma a recuperacao cardiaca do Apple Watch em descansos mais inteligentes para forca, hipertrofia e condicionamento.",
    navFeatures: "Recursos",
    navSystem: "Recuperacao",
    navPricing: "Pro",
    navSupport: "Suporte",
    navPrivacy: "Privacidade",
    navTerms: "Termos",
    download: "Abrir App Store",
    badge: "Treino de forca com Apple Watch",
    heroText: "Comece no Apple Watch, treine no ritmo certo e deixe a recuperacao cardiaca guiar a proxima serie.",
    ctaPrimary: "Baixar na App Store",
    ctaSecondary: "Ver fluxo de recuperacao",
    featuresTitle: "Descansos que respondem ao seu corpo",
    featuresText: "SetReady nao e um timer generico. Ele considera contexto do treino, queda da frequencia cardiaca e perfil escolhido.",
    privacyStripText: "Dados de saude e treino ficam no dispositivo e no Apple Health. Firebase Analytics e Crashlytics sao usados para padroes anonimos, estabilidade e qualidade. SetReady nao usa AdMob nem SDKs de publicidade.",
    footerTagline: "Descanso adaptativo para treino de forca com Apple Watch.",
    supportTitle: "Suporte",
    supportSubtitle: "Conte o que aconteceu e com qual dispositivo treinou. Cada mensagem inclui APP_NAME para identificar SetReady.",
    contactTitle: "Falar com suporte",
    contactText: "Envie uma mensagem e responderemos assim que possivel.",
    name: "Nome",
    email: "Email",
    topic: "Assunto",
    message: "Mensagem",
    namePlaceholder: "Seu nome",
    messagePlaceholder: "Descreva o problema, pergunta ou sugestao...",
    send: "Enviar",
    sentTitle: "Mensagem enviada",
    privacyTitle: "Politica de privacidade",
    privacyUpdated: "Ultima atualizacao: 18 de maio de 2026",
    privacyIntro: "Esta politica explica quais dados o SetReady processa no app, site e suporte.",
    termsTitle: "Termos de uso",
    termsUpdated: "Ultima atualizacao: 18 de maio de 2026",
    termsIntro: "Estes termos regulam o uso do SetReady, do site e dos canais de suporte."
  },
  "zh-Hans": {
    metaTitle: "SetReady: Adaptive Rest Timer - Apple Watch恢复计时器",
    metaDescription: "SetReady将Apple Watch心率恢复转化为力量、增肌和体能训练的智能休息时间。",
    navFeatures: "功能",
    navSystem: "恢复",
    navPricing: "Pro",
    navSupport: "支持",
    navPrivacy: "隐私",
    navTerms: "条款",
    download: "打开 App Store",
    badge: "Apple Watch力量训练",
    heroText: "在Apple Watch上开始训练，按节奏完成每组，让心率恢复决定下一组时机。",
    ctaPrimary: "在 App Store 下载",
    ctaSecondary: "查看恢复流程",
    featuresTitle: "根据身体状态调整休息",
    featuresText: "SetReady不是普通间歇计时器。它会结合训练情境、心率下降和你的训练配置。",
    privacyStripText: "健康和训练数据保留在设备与Apple Health中。Firebase Analytics和Crashlytics用于匿名使用趋势、稳定性与产品质量。SetReady不使用AdMob或广告SDK。",
    footerTagline: "适用于Apple Watch力量训练的自适应休息计时。",
    supportTitle: "支持",
    supportSubtitle: "告诉我们发生了什么以及你使用的设备。每条消息都会包含SetReady的APP_NAME以区分应用。",
    contactTitle: "联系支持",
    contactText: "发送消息后，我们会尽快回复。",
    name: "姓名",
    email: "邮箱",
    topic: "主题",
    message: "消息",
    namePlaceholder: "你的姓名",
    messagePlaceholder: "描述问题、疑问或功能请求...",
    send: "发送",
    sentTitle: "消息已发送",
    privacyTitle: "隐私政策",
    privacyUpdated: "最后更新：2026年5月18日",
    privacyIntro: "本政策说明SetReady在应用、网站和支持渠道中处理的数据。",
    termsTitle: "使用条款",
    termsUpdated: "最后更新：2026年5月18日",
    termsIntro: "这些条款适用于SetReady、网站和相关支持渠道。"
  }
};

for (const [code, overrides] of Object.entries(derived)) {
  t[code] = mergeLocale(t.en, overrides);
}

const localePatches = {
  de: {
    storeSourceFallback: "App-Store-Daten als Fallback",
    storeSourceLive: "Live-Daten aus dem App Store",
    statRating: "Bewertung",
    statVersion: "Version",
    statPrice: "Preis",
    statRequires: "Erfordert",
    statLanguages: "Sprachen",
    ratingFallback: "Neu",
    liveBadge: "LIVE-TRAINING",
    watchRequired: "Apple Watch erforderlich",
    heroMetricBpm: "BPM",
    heroMetricRest: "Pause",
    heroMetricGate: "Ready-Gate",
    heroMetricNext: "Nachste Serie",
    heroReady: "Bereit",
    featuresEyebrow: "Fur Athleten, die Erholung messen",
    feature1Title: "Watch zuerst",
    feature1Text: "Starte auf der Apple Watch und erfasse Herzfrequenz, Satze, Pausen und Erholung, ohne das iPhone durch das Studio zu tragen.",
    feature2Title: "Adaptive Pausen",
    feature2Text: "Profile fur Kraft, Hypertrophie und Conditioning steuern Mindestpause, Erholungsziel und Bereitschaft.",
    feature3Title: "Herzfrequenz-Erholung",
    feature3Text: "Nach jedem Satz verfolgt SetReady, wie schnell die Herzfrequenz sinkt, und passt den Timer mit klaren Signalen an.",
    feature4Title: "iPhone-Dashboard",
    feature4Text: "Spiegle das Live-Training auf dem iPhone fur grossere Steuerung, Metriken und den vollstandigen Trainingsstatus.",
    feature5Title: "Trainingsverlauf",
    feature5Text: "Speichere abgeschlossene Einheiten, Monatskalender, Wochenstatistiken und detaillierte Erholungsverlaufe.",
    feature6Title: "Teilbare Berichte",
    feature6Text: "Exportiere klare Leistungsberichte mit Satzen, Pausen, Herzfrequenz und Erholung.",
    systemEyebrow: "Erholungssystem",
    systemTitle: "Drei Signale vor der nachsten Serie",
    systemText: "SetReady wartet auf die Mindestpause, beobachtet den Herzfrequenzabfall und wendet dein Ready-Gate an.",
    signal1Title: "Mindestpause",
    signal1Text: "Dein Profil sichert die Basispause, bevor Erholung bewertet wird.",
    signal2Title: "HF-Abfall",
    signal2Text: "Apple-Watch-Messungen zeigen, ob dein Korper schnell runterfahrt oder mehr Zeit braucht.",
    signal3Title: "Ready-Gate",
    signal3Text: "Die nachste Serie ist erst bereit, wenn Ziel und Stabilitatsfenster erreicht sind.",
    proEyebrow: "SetReady Pro",
    proTitle: "Schalte tieferen Trainingsverlauf frei",
    proText: "Pro erweitert SetReady mit unbegrenztem Verlauf, Trends und fortgeschrittenen Pauseneinstellungen.",
    planMonthly: "Monatlich",
    planMonthlyText: "Flexibler Zugang fur aktive Trainingsblocke.",
    planYearly: "Jahrlich",
    planYearlyText: "Bester Wert fur kontinuierliches Training.",
    planLifetime: "Lebenslang",
    planLifetimeText: "Einmalige Freischaltung aktueller und kunftiger Pro-Werkzeuge.",
    bestValue: "Bester Wert",
    proFeature1: "Unbegrenzter Verlauf",
    proFeature2: "Erholungs- und Belastungstrends",
    proFeature3: "Erweiterte Pausensteuerung",
    proFeature4: "Leistungsbericht-Export",
    privacyStripTitle: "Lokal privat, mit Firebase Analytics messbar",
    learnPrivacy: "Datenschutz lesen",
    faqTitle: "Haufige Fragen",
    faq: [
      ["Brauche ich eine Apple Watch?", "Ja. SetReady basiert auf Herzfrequenzdaten der Apple Watch wahrend des Trainings. Das iPhone spiegelt die Einheit und speichert den Verlauf."],
      ["Ist SetReady medizinischer Rat?", "Nein. SetReady bietet nur Trainingszeit-Hinweise und diagnostiziert keine Gesundheit oder Herzerkrankungen."],
      ["Wo bleiben meine Daten?", "Gesundheitsdaten bleiben auf deinem Gerat und in Apple Health. SetReady verkauft keine Gesundheitsdaten."],
      ["Gibt es Werbung?", "Nein. SetReady nutzt optionale Pro-Abos und Lifetime-Freischaltung, keine Werbung."]
    ],
    topicOptions: ["Allgemeine Frage", "Fehler melden", "Funktionswunsch", "Abo-Problem", "Apple-Watch-Sync", "Datenschutzanfrage"],
    emailPlaceholder: "du@beispiel.de",
    sending: "Wird gesendet...",
    sentText: "Danke. Wir antworten innerhalb von 24-48 Stunden.",
    sendAnother: "Weitere Nachricht senden",
    tooMany: "Zu viele Nachrichten. Bitte warte vor dem erneuten Versuch.",
    errorText: "Die Nachricht konnte nicht gesendet werden. Bitte spater erneut versuchen.",
    supportFaqTitle: "Schnelle Antworten",
    supportFaq: [
      ["Wie starte ich ein Training?", "Offne SetReady auf der Apple Watch und starte dort. Das iPhone spiegelt die Einheit."],
      ["Wie stelle ich Pro wieder her?", "Offne die Pro-Ansicht und nutze Kaufe wiederherstellen. Die Abrechnung lauft uber Apple."],
      ["Warum wird Erholung nicht gemessen?", "Prufe, ob die Apple Watch Herzfrequenz messen darf und Health-Berechtigungen aktiv sind."]
    ],
    privacyLinksTitle: "Relevante Dienst-Richtlinien",
    privacyLinks: [
      ["Apple Datenschutz", "https://www.apple.com/legal/privacy/"],
      ["Google Datenschutzerklarung", "https://policies.google.com/privacy"],
      ["Firebase Datenschutz und Sicherheit", "https://firebase.google.com/support/privacy"],
      ["EmailJS Datenschutz", "https://www.emailjs.com/legal/privacy-policy/"]
    ],
    privacySections: [
      ["Uberblick", "SetReady nutzt Apple Watch und HealthKit, um Pausenzeiten zu steuern. Gesundheits- und Trainingsdaten werden auf deinen Geraten verarbeitet, ausser du sendest Supportdaten oder teilst einen Export."],
      ["HealthKit und Apple Watch", "SetReady liest Herzfrequenz und Trainingsinformationen uber HealthKit-Berechtigungen und kann auf der Apple Watch gestartete Trainings speichern."],
      ["Lokaler Verlauf", "Abgeschlossene Einheiten, Pausenereignisse, Satze, Erholungsproben und Einstellungen werden lokal mit Apple-Frameworks gespeichert."],
      ["Firebase Analytics und Crashlytics", "SetReady nutzt Firebase Analytics fur anonyme Nutzungsmuster und Crashlytics zur Fehlerdiagnose. Firebase kann Gerate-, App-, Ereignis-, Diagnose- und App-Instanz-IDs verarbeiten, aber keine HealthKit-Herzfrequenzwerte oder Trainingsinhalte."],
      ["Keine Werbe-SDKs", "SetReady nutzt kein Google AdMob, keine Werbe-SDKs und kein Werbetracking. Pro-Abos und Lifetime-Kauf laufen uber StoreKit."],
      ["Kaufe", "Abos und Lifetime-Kaufe werden von Apple im App Store verarbeitet. SetReady erhalt nur den Freischaltstatus."],
      ["Supportnachrichten", "Das Webformular sendet Name, E-Mail, Thema, Nachricht und APP_NAME uber EmailJS, damit wir SetReady zuordnen und antworten konnen."],
      ["Aufbewahrung und Rechte", "Lokale Daten bleiben bis zur Loschung auf deinem Gerat. Firebase-Daten werden nach Google/Firebase-Einstellungen aufbewahrt."]
    ],
    termsSections: [
      ["Nutzung von SetReady", "SetReady hilft, Pausen beim Training anhand von Apple-Watch-Herzfrequenz, Profilen und Einstellungen zu timen."],
      ["Gesundheitshinweis", "SetReady ist kein Medizinprodukt und ersetzt keine medizinische Beratung, Diagnose oder Behandlung."],
      ["Apple-Watch-Anforderung", "Das Live-Training erfordert Apple-Watch-Herzfrequenzdaten und Health-Berechtigungen."],
      ["SetReady Pro", "SetReady Pro kann monatlich, jahrlich oder lebenslang angeboten werden. Abos verlangern sich uber Apple, sofern sie nicht rechtzeitig gekundigt werden."],
      ["Zulassige Nutzung", "Missbrauche App, Website oder Supportformular nicht und sende keine rechtswidrigen oder irrefuhrenden Inhalte."],
      ["Drittanbieter", "SetReady nutzt Apple-Frameworks, EmailJS fur Support sowie Firebase Analytics und Crashlytics fur Qualitat und Diagnose."],
      ["Anderungen", "Wir konnen App, Website, Preise, Funktionen oder Bedingungen aktualisieren."],
      ["Kontakt", `Fragen zu diesen Bedingungen: Supportseite oder ${app.supportEmail}.`]
    ]
  },
  fr: {
    storeSourceFallback: "Donnees App Store de secours",
    storeSourceLive: "Donnees App Store en direct",
    statRating: "Note",
    statVersion: "Version",
    statPrice: "Prix",
    statRequires: "Requiert",
    statLanguages: "Langues",
    ratingFallback: "Nouveau",
    liveBadge: "SEANCE LIVE",
    watchRequired: "Apple Watch requise",
    heroMetricBpm: "BPM",
    heroMetricRest: "Repos",
    heroMetricGate: "Seuil ready",
    heroMetricNext: "Serie suivante",
    heroReady: "Pret",
    featuresEyebrow: "Pour les sportifs qui suivent la recuperation",
    feature1Title: "Capture sur Watch",
    feature1Text: "Lancez la seance sur Apple Watch pour capter frequence cardiaque, series, repos et recuperation sans porter l'iPhone.",
    feature2Title: "Repos adaptatif",
    feature2Text: "Les profils force, hypertrophie et conditioning reglent repos minimum, cible de recuperation et seuil de preparation.",
    feature3Title: "Recuperation cardiaque",
    feature3Text: "Apres chaque serie, SetReady suit la baisse de votre frequence cardiaque et ajuste le minuteur.",
    feature4Title: "Tableau iPhone",
    feature4Text: "Repliquez l'entrainement en direct sur iPhone avec de grands controles et toutes les metriques.",
    feature5Title: "Historique",
    feature5Text: "Conservez les seances terminees, calendriers mensuels, stats hebdomadaires et timelines de recuperation.",
    feature6Title: "Rapports partageables",
    feature6Text: "Exportez des resumes propres avec series, repos, frequence cardiaque et recuperation.",
    systemEyebrow: "Systeme de recuperation",
    systemTitle: "Trois signaux avant la serie suivante",
    systemText: "SetReady attend le repos minimum, observe la baisse cardiaque et applique votre seuil de preparation.",
    signal1Title: "Repos minimum",
    signal1Text: "Votre profil protege le repos de base avant l'analyse de recuperation.",
    signal2Title: "Baisse FC",
    signal2Text: "Les mesures Apple Watch montrent si le corps redescend vite ou a besoin de temps.",
    signal3Title: "Seuil ready",
    signal3Text: "La serie suivante est prete lorsque la cible et la fenetre de stabilite sont atteintes.",
    proTitle: "Debloquez une memoire d'entrainement plus profonde",
    proText: "Pro ajoute historique illimite, tendances et reglages avances de repos.",
    planMonthly: "Mensuel",
    planMonthlyText: "Acces flexible pour blocs actifs.",
    planYearly: "Annuel",
    planYearlyText: "Meilleur rapport qualite-prix.",
    planLifetime: "A vie",
    planLifetimeText: "Deverrouillage unique des outils Pro.",
    bestValue: "Meilleure valeur",
    proFeature1: "Historique illimite",
    proFeature2: "Tendances recuperation et charge",
    proFeature3: "Controles de repos avances",
    proFeature4: "Export de rapport",
    privacyStripTitle: "Prive localement, mesure avec Firebase Analytics",
    learnPrivacy: "Lire la confidentialite",
    faqTitle: "Questions frequentes",
    faq: [
      ["Ai-je besoin d'une Apple Watch ?", "Oui. SetReady utilise la frequence cardiaque de l'Apple Watch pendant l'entrainement."],
      ["SetReady est-il medical ?", "Non. SetReady guide uniquement les temps d'entrainement."],
      ["Ou sont stockees mes donnees ?", "Les donnees de sante restent sur l'appareil et dans Apple Health."],
      ["Y a-t-il des publicites ?", "Non. SetReady utilise Pro et un achat a vie optionnel, pas de publicite."]
    ],
    topicOptions: ["Question generale", "Bug", "Demande de fonction", "Probleme d'abonnement", "Sync Apple Watch", "Demande confidentialite"],
    emailPlaceholder: "vous@exemple.com",
    sending: "Envoi...",
    sentText: "Merci. Nous repondrons sous 24-48 heures.",
    sendAnother: "Envoyer un autre message",
    tooMany: "Trop de messages envoyes. Veuillez patienter.",
    errorText: "Le message n'a pas pu etre envoye.",
    supportFaqTitle: "Reponses rapides",
    supportFaq: [
      ["Comment lancer une seance ?", "Ouvrez SetReady sur Apple Watch et demarrez la seance."],
      ["Comment restaurer Pro ?", "Ouvrez l'ecran Pro et utilisez Restaurer les achats."],
      ["Pourquoi la recuperation n'est-elle pas mesuree ?", "Verifiez la lecture cardiaque et les permissions Sante."]
    ],
    privacyLinksTitle: "Politiques des services",
    privacyLinks: [
      ["Confidentialite Apple", "https://www.apple.com/legal/privacy/"],
      ["Regles de confidentialite Google", "https://policies.google.com/privacy"],
      ["Confidentialite et securite Firebase", "https://firebase.google.com/support/privacy"],
      ["Confidentialite EmailJS", "https://www.emailjs.com/legal/privacy-policy/"]
    ],
    privacySections: [
      ["Apercu", "SetReady utilise Apple Watch et HealthKit pour guider les temps de repos. Les donnees de sante et d'entrainement sont traitees sur vos appareils sauf partage volontaire."],
      ["HealthKit et Apple Watch", "SetReady lit la frequence cardiaque et les informations d'entrainement via les autorisations HealthKit et peut enregistrer les seances lancees sur Apple Watch."],
      ["Historique local", "Les seances terminees, repos, series, echantillons de recuperation et preferences sont stockes localement avec les frameworks Apple."],
      ["Firebase Analytics et Crashlytics", "SetReady utilise Firebase Analytics pour les tendances anonymes et Crashlytics pour diagnostiquer les plantages. Firebase peut traiter des identifiants d'instance, donnees d'appareil, d'app, d'evenements et diagnostics, mais pas les valeurs cardiaques HealthKit ni le contenu des seances."],
      ["Aucune publicite", "SetReady n'utilise pas Google AdMob, SDK publicitaire ni suivi publicitaire personnalise."],
      ["Achats", "Les abonnements et achats a vie sont traites par Apple via l'App Store. SetReady recoit seulement le statut d'acces."],
      ["Support", "Le formulaire envoie nom, email, sujet, message et APP_NAME via EmailJS pour identifier l'app et repondre."],
      ["Conservation et droits", "Les donnees locales restent sur l'appareil jusqu'a suppression. Les donnees Firebase suivent les parametres et politiques Google/Firebase."]
    ],
    termsSections: [
      ["Utilisation de SetReady", "SetReady aide a chronometrer les repos avec la frequence cardiaque Apple Watch, les profils et les reglages."],
      ["Avertissement sante", "SetReady n'est pas un dispositif medical et ne fournit pas de conseil, diagnostic ou traitement medical."],
      ["Apple Watch requise", "L'experience live requiert la frequence cardiaque Apple Watch et les permissions Sante."],
      ["SetReady Pro", "SetReady Pro peut etre mensuel, annuel ou a vie. Les abonnements se renouvellent via Apple sauf annulation."],
      ["Usage acceptable", "N'abusez pas de l'app, du site ou du formulaire et n'envoyez pas de contenu illegal ou trompeur."],
      ["Services tiers", "SetReady utilise les frameworks Apple, EmailJS pour le support et Firebase pour qualite et diagnostics."],
      ["Modifications", "Nous pouvons modifier l'app, le site, les prix, les fonctions ou les conditions."],
      ["Contact", `Questions : page d'assistance ou ${app.supportEmail}.`]
    ]
  }
};

Object.assign(localePatches, preservedLocalePatches, {
  ko: {
    storeSourceFallback: "App Store 대체 데이터",
    storeSourceLive: "App Store 실시간 데이터",
    statRating: "평점",
    statVersion: "버전",
    statPrice: "가격",
    statRequires: "요구 사항",
    statLanguages: "언어",
    ratingFallback: "신규",
    liveBadge: "라이브 세션",
    watchRequired: "Apple Watch 필요",
    heroMetricBpm: "BPM",
    heroMetricRest: "휴식",
    heroMetricGate: "Ready 게이트",
    heroMetricNext: "다음 세트",
    heroReady: "Ready",
    featuresEyebrow: "회복을 확인하며 훈련하는 사람을 위해",
    feature1Title: "Watch 우선 기록",
    feature1Text: "Apple Watch에서 세션을 시작해 심박, 세트, 휴식, 회복을 자연스럽게 기록합니다.",
    feature2Title: "적응형 휴식",
    feature2Text: "근력, 근비대, 컨디셔닝 프로필이 최소 휴식, 회복 목표, 준비 기준을 조정합니다.",
    feature3Title: "심박 회복",
    feature3Text: "각 세트 후 심박이 얼마나 빨리 떨어지는지 보고 타이머를 조정합니다.",
    feature4Title: "iPhone 대시보드",
    feature4Text: "라이브 운동을 iPhone에 미러링해 큰 컨트롤과 전체 상태를 확인합니다.",
    feature5Title: "운동 기록",
    feature5Text: "완료한 세션, 월간 캘린더, 주간 통계, 회복 타임라인을 보관합니다.",
    feature6Title: "공유 리포트",
    feature6Text: "세트, 휴식, 심박, 회복을 정리한 성과 리포트를 내보냅니다.",
    systemEyebrow: "회복 시스템",
    systemTitle: "다음 세트 전 세 가지 신호",
    systemText: "SetReady는 최소 휴식, 심박 하락, Ready 게이트를 함께 확인합니다.",
    signal1Title: "최소 휴식",
    signal1Text: "프로필이 회복 판단 전 필요한 기본 휴식을 보호합니다.",
    signal2Title: "심박 하락",
    signal2Text: "Apple Watch 샘플이 몸이 빠르게 안정되는지 보여줍니다.",
    signal3Title: "Ready 게이트",
    signal3Text: "회복 목표와 안정 시간이 충족되면 다음 세트가 준비됩니다.",
    proTitle: "더 깊은 운동 기록 잠금 해제",
    proText: "Pro는 무제한 기록, 회복 추세, 고급 휴식 조정을 제공합니다.",
    planMonthly: "월간",
    planMonthlyText: "훈련 블록에 맞춘 유연한 이용.",
    planYearly: "연간",
    planYearlyText: "꾸준한 훈련에 가장 좋은 가치.",
    planLifetime: "평생",
    planLifetimeText: "현재와 미래 Pro 도구를 한 번에 잠금 해제.",
    bestValue: "최고 가치",
    proFeature1: "무제한 운동 기록",
    proFeature2: "회복 및 부하 추세",
    proFeature3: "고급 휴식 컨트롤",
    proFeature4: "성과 리포트 내보내기",
    privacyStripTitle: "로컬 중심 개인정보와 Firebase Analytics",
    learnPrivacy: "개인정보 읽기",
    faqTitle: "자주 묻는 질문",
    faq: [
      ["Apple Watch가 필요한가요?", "예. SetReady는 훈련 중 Apple Watch 심박 기록을 중심으로 작동합니다."],
      ["의료 조언인가요?", "아니요. 운동 타이밍 안내일 뿐 진단이나 치료가 아닙니다."],
      ["데이터는 어디에 저장되나요?", "건강 데이터는 기기와 Apple Health 안에 남습니다."],
      ["광고가 있나요?", "아니요. SetReady는 광고가 아니라 Pro와 평생 잠금 해제로 운영됩니다."]
    ],
    topicOptions: ["일반 질문", "버그 신고", "기능 요청", "구독 문제", "Apple Watch 동기화", "개인정보 요청"],
    emailPlaceholder: "you@example.com",
    sending: "전송 중...",
    sentText: "감사합니다. 24-48시간 내 답변드리겠습니다.",
    sendAnother: "다른 메시지 보내기",
    tooMany: "메시지가 너무 많습니다. 잠시 후 다시 시도하세요.",
    errorText: "메시지를 보낼 수 없습니다.",
    supportFaqTitle: "빠른 답변",
    supportFaq: [
      ["운동은 어떻게 시작하나요?", "Apple Watch에서 SetReady를 열고 세션을 시작하세요."],
      ["Pro는 어떻게 복원하나요?", "Pro 화면에서 구매 복원을 사용하세요."],
      ["회복이 측정되지 않아요", "심박 측정과 건강 권한을 확인하세요."]
    ],
    privacyLinksTitle: "관련 서비스 정책",
    privacyLinks: [
      ["Apple 개인정보", "https://www.apple.com/legal/privacy/"],
      ["Google 개인정보처리방침", "https://policies.google.com/privacy"],
      ["Firebase 개인정보 및 보안", "https://firebase.google.com/support/privacy"],
      ["EmailJS 개인정보", "https://www.emailjs.com/legal/privacy-policy/"]
    ],
    privacySections: [
      ["개요", "SetReady는 Apple Watch와 HealthKit을 사용해 휴식 시간을 안내합니다. 건강 및 운동 데이터는 사용자가 직접 공유하지 않는 한 기기에서 처리됩니다."],
      ["HealthKit 및 Apple Watch", "SetReady는 HealthKit 권한으로 심박과 운동 정보를 읽고 Apple Watch에서 시작한 운동을 저장할 수 있습니다."],
      ["로컬 기록", "완료 세션, 휴식 이벤트, 세트, 회복 샘플, 설정은 Apple 프레임워크로 로컬 저장됩니다."],
      ["Firebase Analytics 및 Crashlytics", "SetReady는 익명 사용 패턴에 Firebase Analytics, 충돌 진단에 Crashlytics를 사용합니다. Firebase는 기기, 앱, 이벤트, 진단 및 앱 인스턴스 식별자를 처리할 수 있지만 HealthKit 심박값이나 운동 내용은 수집하지 않습니다."],
      ["광고 SDK 없음", "SetReady는 Google AdMob, 광고 SDK 또는 개인화 광고 추적을 사용하지 않습니다."],
      ["구매", "구독과 평생 구매는 App Store를 통해 Apple이 처리하며 SetReady는 접근 상태만 받습니다."],
      ["지원 메시지", "양식은 이름, 이메일, 주제, 메시지와 APP_NAME을 EmailJS로 전송합니다."],
      ["보관 및 권리", "로컬 데이터는 삭제할 때까지 기기에 남습니다. Firebase 데이터는 Google/Firebase 정책을 따릅니다."]
    ],
    termsSections: [
      ["SetReady 사용", "SetReady는 Apple Watch 심박, 프로필, 설정을 사용해 운동 휴식을 안내합니다."],
      ["건강 고지", "SetReady는 의료 기기가 아니며 의학적 조언, 진단 또는 치료를 제공하지 않습니다."],
      ["Apple Watch 요구", "라이브 경험에는 Apple Watch 심박 기록과 건강 권한이 필요합니다."],
      ["SetReady Pro", "SetReady Pro는 월간, 연간 또는 평생 이용으로 제공될 수 있으며 구독은 Apple을 통해 갱신됩니다."],
      ["허용되는 사용", "앱, 사이트, 양식을 악용하거나 불법 또는 오해를 부르는 내용을 보내지 마세요."],
      ["타사 서비스", "SetReady는 Apple 프레임워크, EmailJS, Firebase Analytics/Crashlytics를 사용할 수 있습니다."],
      ["변경", "앱, 사이트, 가격, 기능 또는 약관은 변경될 수 있습니다."],
      ["연락", `질문은 지원 페이지 또는 ${app.supportEmail}로 보내주세요.`]
    ]
  },
  "pt-BR": {
    storeSourceFallback: "Dados da App Store de fallback",
    storeSourceLive: "Dados ao vivo da App Store",
    statRating: "Avaliacao",
    statVersion: "Versao",
    statPrice: "Preco",
    statRequires: "Requer",
    statLanguages: "Idiomas",
    ratingFallback: "Novo",
    liveBadge: "SESSAO AO VIVO",
    watchRequired: "Apple Watch necessario",
    heroMetricBpm: "BPM",
    heroMetricRest: "Descanso",
    heroMetricGate: "Portao ready",
    heroMetricNext: "Proxima serie",
    heroReady: "Pronto",
    featuresEyebrow: "Para quem treina acompanhando recuperacao",
    feature1Title: "Registro pelo Watch",
    feature1Text: "Comece no Apple Watch para registrar frequencia cardiaca, series, descanso e recuperacao.",
    feature2Title: "Descanso adaptativo",
    feature2Text: "Perfis de forca, hipertrofia e condicionamento ajustam descanso minimo e metas de recuperacao.",
    feature3Title: "Recuperacao cardiaca",
    feature3Text: "Depois de cada serie, SetReady acompanha a queda da frequencia cardiaca e ajusta o timer.",
    feature4Title: "Dashboard no iPhone",
    feature4Text: "Espelhe o treino ao vivo no iPhone com controles maiores e estado completo.",
    feature5Title: "Historico de treinos",
    feature5Text: "Guarde sessoes, calendarios mensais, estatisticas semanais e linhas de recuperacao.",
    feature6Title: "Relatorios compartilhaveis",
    feature6Text: "Exporte resumos com series, descanso, frequencia cardiaca e recuperacao.",
    systemEyebrow: "Sistema de recuperacao",
    systemTitle: "Tres sinais antes da proxima serie",
    systemText: "SetReady espera o descanso minimo, observa a queda cardiaca e aplica o portao de prontidao.",
    signal1Title: "Descanso minimo",
    signal1Text: "Seu perfil protege o descanso base antes de avaliar recuperacao.",
    signal2Title: "Queda de FC",
    signal2Text: "Amostras do Apple Watch mostram se o corpo estabiliza rapido ou precisa de tempo.",
    signal3Title: "Portao ready",
    signal3Text: "A proxima serie fica pronta quando meta e estabilidade sao atingidas.",
    proTitle: "Desbloqueie memoria de treino mais profunda",
    proText: "Pro adiciona historico ilimitado, tendencias e ajustes avancados de descanso.",
    planMonthly: "Mensal",
    planMonthlyText: "Acesso flexivel para blocos ativos.",
    planYearly: "Anual",
    planYearlyText: "Melhor valor para treinar continuamente.",
    planLifetime: "Vitalicio",
    planLifetimeText: "Desbloqueio unico das ferramentas Pro.",
    bestValue: "Melhor valor",
    proFeature1: "Historico ilimitado",
    proFeature2: "Tendencias de recuperacao e carga",
    proFeature3: "Controles avancados de descanso",
    proFeature4: "Exportacao de relatorio",
    privacyStripTitle: "Privacidade local, medicao com Firebase Analytics",
    learnPrivacy: "Ler privacidade",
    faqTitle: "Perguntas frequentes",
    faq: [
      ["Preciso de Apple Watch?", "Sim. SetReady usa a frequencia cardiaca do Apple Watch durante o treino."],
      ["E conselho medico?", "Nao. E apenas orientacao de tempo de treino."],
      ["Onde ficam meus dados?", "Dados de saude ficam no dispositivo e no Apple Health."],
      ["Tem anuncios?", "Nao. SetReady usa Pro e desbloqueio vitalicio, nao publicidade."]
    ],
    topicOptions: ["Pergunta geral", "Bug", "Pedido de recurso", "Problema de assinatura", "Sync Apple Watch", "Pedido de privacidade"],
    emailPlaceholder: "voce@exemplo.com",
    sending: "Enviando...",
    sentText: "Obrigado. Responderemos em 24-48 horas.",
    sendAnother: "Enviar outra mensagem",
    tooMany: "Muitas mensagens enviadas. Aguarde antes de tentar novamente.",
    errorText: "Nao foi possivel enviar a mensagem.",
    supportFaqTitle: "Respostas rapidas",
    supportFaq: [
      ["Como inicio um treino?", "Abra SetReady no Apple Watch e comece a sessao ali."],
      ["Como restauro Pro?", "Abra a tela Pro e use Restaurar compras."],
      ["Por que a recuperacao nao aparece?", "Verifique a leitura cardiaca e as permissoes de Saude."]
    ],
    privacyLinksTitle: "Politicas de servicos",
    privacyLinks: [
      ["Privacidade Apple", "https://www.apple.com/legal/privacy/"],
      ["Privacidade Google", "https://policies.google.com/privacy"],
      ["Privacidade e seguranca Firebase", "https://firebase.google.com/support/privacy"],
      ["Privacidade EmailJS", "https://www.emailjs.com/legal/privacy-policy/"]
    ],
    privacySections: [
      ["Visao geral", "SetReady usa Apple Watch e HealthKit para orientar descansos. Dados de saude e treino sao processados nos seus dispositivos salvo compartilhamento voluntario."],
      ["HealthKit e Apple Watch", "SetReady le frequencia cardiaca e informacoes de treino com permissoes HealthKit e pode salvar treinos iniciados no Apple Watch."],
      ["Historico local", "Sessoes, descansos, series, amostras de recuperacao e preferencias sao salvos localmente com frameworks Apple."],
      ["Firebase Analytics e Crashlytics", "SetReady usa Firebase Analytics para padroes anonimos e Crashlytics para diagnosticar falhas. Firebase pode processar dados de dispositivo, app, eventos, diagnosticos e identificadores, mas nao valores cardiacos HealthKit ou conteudo dos treinos."],
      ["Sem publicidade", "SetReady nao usa Google AdMob, SDKs de anuncios ou rastreamento para anuncios personalizados."],
      ["Compras", "Assinaturas e compras vitalicias sao processadas pela Apple; SetReady recebe apenas o estado de acesso."],
      ["Suporte", "O formulario envia nome, email, assunto, mensagem e APP_NAME via EmailJS."],
      ["Retencao e direitos", "Dados locais ficam no dispositivo ate exclusao. Dados Firebase seguem politicas Google/Firebase."]
    ],
    termsSections: [
      ["Uso do SetReady", "SetReady ajuda a temporizar descansos com frequencia cardiaca do Apple Watch, perfis e configuracoes."],
      ["Aviso de saude", "SetReady nao e dispositivo medico e nao fornece conselho, diagnostico ou tratamento medico."],
      ["Apple Watch necessario", "A experiencia ao vivo requer frequencia cardiaca do Apple Watch e permissoes de Saude."],
      ["SetReady Pro", "SetReady Pro pode ser mensal, anual ou vitalicio; assinaturas renovam pela Apple salvo cancelamento."],
      ["Uso aceitavel", "Nao abuse do app, site ou formulario e nao envie conteudo ilegal ou enganoso."],
      ["Servicos terceiros", "SetReady usa frameworks Apple, EmailJS e Firebase Analytics/Crashlytics."],
      ["Mudancas", "Podemos atualizar app, site, precos, recursos ou termos."],
      ["Contato", `Perguntas: suporte ou ${app.supportEmail}.`]
    ]
  },
  "zh-Hans": {
    storeSourceFallback: "App Store备用数据",
    storeSourceLive: "App Store实时数据",
    statRating: "评分",
    statVersion: "版本",
    statPrice: "价格",
    statRequires: "要求",
    statLanguages: "语言",
    ratingFallback: "新应用",
    liveBadge: "实时训练",
    watchRequired: "需要 Apple Watch",
    heroMetricBpm: "BPM",
    heroMetricRest: "休息",
    heroMetricGate: "Ready门槛",
    heroMetricNext: "下一组",
    heroReady: "Ready",
    featuresEyebrow: "为关注恢复的训练者打造",
    feature1Title: "Watch优先记录",
    feature1Text: "在Apple Watch上开始训练，记录心率、组数、休息和恢复。",
    feature2Title: "自适应休息",
    feature2Text: "力量、增肌和体能配置会调整最短休息、恢复目标和准备门槛。",
    feature3Title: "心率恢复",
    feature3Text: "每组后跟踪心率下降速度，并用清晰信号调整计时器。",
    feature4Title: "iPhone仪表盘",
    feature4Text: "将实时训练同步到iPhone，获得更大的控制和完整状态。",
    feature5Title: "训练历史",
    feature5Text: "保存已完成训练、月历、周统计和恢复时间线。",
    feature6Title: "可分享报告",
    feature6Text: "导出包含组数、休息、心率和恢复的表现摘要。",
    systemEyebrow: "恢复系统",
    systemTitle: "下一组前的三个信号",
    systemText: "SetReady结合最短休息、心率下降和Ready门槛。",
    signal1Title: "最短休息",
    signal1Text: "训练配置会保护恢复判断前的基础休息。",
    signal2Title: "心率下降",
    signal2Text: "Apple Watch样本显示身体是否快速稳定。",
    signal3Title: "Ready门槛",
    signal3Text: "达到恢复目标和稳定窗口后，下一组才会标记为Ready。",
    proTitle: "解锁更深入的训练记忆",
    proText: "Pro提供无限历史、恢复趋势和高级休息调节。",
    planMonthly: "月度",
    planMonthlyText: "适合训练阶段的灵活访问。",
    planYearly: "年度",
    planYearlyText: "持续训练的最佳价值。",
    planLifetime: "终身",
    planLifetimeText: "一次解锁当前和未来Pro工具。",
    bestValue: "最佳价值",
    proFeature1: "无限训练历史",
    proFeature2: "恢复和负荷趋势",
    proFeature3: "高级休息控制",
    proFeature4: "导出表现报告",
    privacyStripTitle: "本地隐私，Firebase Analytics度量",
    learnPrivacy: "阅读隐私政策",
    faqTitle: "常见问题",
    faq: [
      ["需要Apple Watch吗？", "是。SetReady围绕训练中的Apple Watch心率记录构建。"],
      ["这是医疗建议吗？", "不是。它只提供训练计时参考。"],
      ["数据存在哪里？", "健康数据保留在设备和Apple Health中。"],
      ["有广告吗？", "没有。SetReady使用Pro和终身解锁，不依赖广告。"]
    ],
    topicOptions: ["一般问题", "错误报告", "功能请求", "订阅问题", "Apple Watch同步", "隐私请求"],
    emailPlaceholder: "you@example.com",
    sending: "发送中...",
    sentText: "谢谢。我们会在24-48小时内回复。",
    sendAnother: "发送另一条消息",
    tooMany: "发送过于频繁，请稍后再试。",
    errorText: "消息无法发送。",
    supportFaqTitle: "快速回答",
    supportFaq: [
      ["如何开始训练？", "在Apple Watch上打开SetReady并开始训练。"],
      ["如何恢复Pro？", "打开Pro页面并使用恢复购买。"],
      ["为什么没有恢复数据？", "请检查心率读取和健康权限。"]
    ],
    privacyLinksTitle: "相关服务政策",
    privacyLinks: [
      ["Apple隐私", "https://www.apple.com/legal/privacy/"],
      ["Google隐私政策", "https://policies.google.com/privacy"],
      ["Firebase隐私与安全", "https://firebase.google.com/support/privacy"],
      ["EmailJS隐私", "https://www.emailjs.com/legal/privacy-policy/"]
    ],
    privacySections: [
      ["概览", "SetReady使用Apple Watch和HealthKit指导休息时间。除非你主动分享，健康和训练数据会在设备上处理。"],
      ["HealthKit和Apple Watch", "SetReady通过HealthKit权限读取心率和训练信息，并可保存Apple Watch开始的训练。"],
      ["本地历史", "完成的训练、休息事件、组数、恢复样本和偏好会用Apple框架保存在本地。"],
      ["Firebase Analytics和Crashlytics", "SetReady使用Firebase Analytics了解匿名使用趋势，并使用Crashlytics诊断崩溃。Firebase可能处理设备、应用、事件、诊断和应用实例标识符，但不会收集HealthKit心率值或训练内容。"],
      ["无广告SDK", "SetReady不使用Google AdMob、广告SDK或个性化广告跟踪。"],
      ["购买", "订阅和终身购买由Apple通过App Store处理；SetReady只接收访问状态。"],
      ["支持消息", "表单会通过EmailJS发送姓名、邮箱、主题、消息和APP_NAME。"],
      ["保留和权利", "本地数据会保留在设备上直到删除。Firebase数据遵循Google/Firebase政策。"]
    ],
    termsSections: [
      ["使用SetReady", "SetReady使用Apple Watch心率、训练配置和设置帮助安排休息。"],
      ["健康免责声明", "SetReady不是医疗设备，不提供医疗建议、诊断或治疗。"],
      ["Apple Watch要求", "实时体验需要Apple Watch心率记录和健康权限。"],
      ["SetReady Pro", "SetReady Pro可能提供月度、年度或终身访问；订阅由Apple续订，除非取消。"],
      ["可接受使用", "请勿滥用应用、网站或表单，也不要发送违法或误导内容。"],
      ["第三方服务", "SetReady可能使用Apple框架、EmailJS和Firebase Analytics/Crashlytics。"],
      ["变更", "我们可能更新应用、网站、价格、功能或条款。"],
      ["联系", `问题可通过支持页面或${app.supportEmail}发送。`]
    ]
  }
});

for (const [code, patch] of Object.entries(localePatches)) {
  Object.assign(t[code], patch);
}

function mergeLocale(base, overrides) {
  return {
    ...base,
    ...overrides,
    heroTitle: overrides.heroTitle || base.heroTitle,
    heroKicker: overrides.heroKicker || base.heroKicker,
    topicOptions: overrides.topicOptions || base.topicOptions,
    faq: overrides.faq || base.faq,
    supportFaq: overrides.supportFaq || base.supportFaq,
    privacySections: overrides.privacySections || base.privacySections,
    privacyLinks: overrides.privacyLinks || base.privacyLinks,
    privacyLinksTitle: overrides.privacyLinksTitle || base.privacyLinksTitle,
    termsSections: overrides.termsSections || base.termsSections,
    storeSourceFallback: overrides.storeSourceFallback || base.storeSourceFallback,
    storeSourceLive: overrides.storeSourceLive || base.storeSourceLive,
    statRating: overrides.statRating || base.statRating,
    statVersion: overrides.statVersion || base.statVersion,
    statPrice: overrides.statPrice || base.statPrice,
    statRequires: overrides.statRequires || base.statRequires,
    statLanguages: overrides.statLanguages || base.statLanguages,
    ratingFallback: overrides.ratingFallback || base.ratingFallback,
    liveBadge: overrides.liveBadge || base.liveBadge,
    watchRequired: overrides.watchRequired || base.watchRequired,
    heroMetricBpm: overrides.heroMetricBpm || base.heroMetricBpm,
    heroMetricRest: overrides.heroMetricRest || base.heroMetricRest,
    heroMetricGate: overrides.heroMetricGate || base.heroMetricGate,
    heroMetricNext: overrides.heroMetricNext || base.heroMetricNext,
    heroReady: overrides.heroReady || base.heroReady,
    featuresEyebrow: overrides.featuresEyebrow || base.featuresEyebrow,
    feature1Title: overrides.feature1Title || base.feature1Title,
    feature1Text: overrides.feature1Text || base.feature1Text,
    feature2Title: overrides.feature2Title || base.feature2Title,
    feature2Text: overrides.feature2Text || base.feature2Text,
    feature3Title: overrides.feature3Title || base.feature3Title,
    feature3Text: overrides.feature3Text || base.feature3Text,
    feature4Title: overrides.feature4Title || base.feature4Title,
    feature4Text: overrides.feature4Text || base.feature4Text,
    feature5Title: overrides.feature5Title || base.feature5Title,
    feature5Text: overrides.feature5Text || base.feature5Text,
    feature6Title: overrides.feature6Title || base.feature6Title,
    feature6Text: overrides.feature6Text || base.feature6Text,
    systemEyebrow: overrides.systemEyebrow || base.systemEyebrow,
    systemTitle: overrides.systemTitle || base.systemTitle,
    systemText: overrides.systemText || base.systemText,
    signal1Title: overrides.signal1Title || base.signal1Title,
    signal1Text: overrides.signal1Text || base.signal1Text,
    signal2Title: overrides.signal2Title || base.signal2Title,
    signal2Text: overrides.signal2Text || base.signal2Text,
    signal3Title: overrides.signal3Title || base.signal3Title,
    signal3Text: overrides.signal3Text || base.signal3Text,
    proEyebrow: overrides.proEyebrow || base.proEyebrow,
    proTitle: overrides.proTitle || base.proTitle,
    proText: overrides.proText || base.proText,
    planMonthly: overrides.planMonthly || base.planMonthly,
    planMonthlyText: overrides.planMonthlyText || base.planMonthlyText,
    planYearly: overrides.planYearly || base.planYearly,
    planYearlyText: overrides.planYearlyText || base.planYearlyText,
    planLifetime: overrides.planLifetime || base.planLifetime,
    planLifetimeText: overrides.planLifetimeText || base.planLifetimeText,
    bestValue: overrides.bestValue || base.bestValue,
    proFeature1: overrides.proFeature1 || base.proFeature1,
    proFeature2: overrides.proFeature2 || base.proFeature2,
    proFeature3: overrides.proFeature3 || base.proFeature3,
    proFeature4: overrides.proFeature4 || base.proFeature4,
    privacyStripTitle: overrides.privacyStripTitle || base.privacyStripTitle,
    learnPrivacy: overrides.learnPrivacy || base.learnPrivacy,
    namePlaceholder: overrides.namePlaceholder || base.namePlaceholder,
    emailPlaceholder: overrides.emailPlaceholder || base.emailPlaceholder,
    sending: overrides.sending || base.sending,
    sentText: overrides.sentText || base.sentText,
    sendAnother: overrides.sendAnother || base.sendAnother,
    tooMany: overrides.tooMany || base.tooMany,
    errorText: overrides.errorText || base.errorText,
    supportFaqTitle: overrides.supportFaqTitle || base.supportFaqTitle
  };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pagePath(lang, page) {
  const segment = page === "home" ? "index.html" : `${page}/index.html`;
  return lang.dir ? `${lang.dir}/${segment}` : segment;
}

function canonical(lang, page) {
  return app.baseUrl + pagePath(lang, page).replace(/index\.html$/, "");
}

function rootPrefix(lang, page) {
  if (lang.dir && page !== "home") return "../../";
  if (lang.dir || page !== "home") return "../";
  return "";
}

function langHomePrefix(page) {
  return page === "home" ? "./" : "../";
}

function sameLangLink(page, target) {
  const prefix = langHomePrefix(page);
  return target === "home" ? `${prefix}index.html` : `${prefix}${target}/index.html`;
}

function crossLangLink(currentLang, page, targetLang) {
  const prefix = rootPrefix(currentLang, page);
  const target = pagePath(targetLang, page);
  return prefix + target;
}

function alternates(page) {
  return languages
    .map((lang) => `<link rel="alternate" hreflang="${lang.html}" href="${canonical(lang, page)}" />`)
    .join("\n    ") + `\n    <link rel="alternate" hreflang="x-default" href="${canonical(languages[0], page)}" />`;
}

function appStoreConfig(lang, prefix) {
  return `<script>
    window.SETREADY_APPSTORE_CONFIG = {
      appStoreId: "${app.appStoreId}",
      bundleId: "${app.bundleId}",
      appStoreUrl: "${app.appStoreUrl}",
      language: "${lang.code}",
      locale: "${lang.locale}",
      fallback: {
        trackName: "${app.appName}",
        artistName: "Lito Arias",
        trackViewUrl: "${app.appStoreUrl}",
        artworkUrl512: "${prefix}assets/icon.png",
        screenshotUrls: ["${prefix}assets/setready-pro-review.png"],
        ipadScreenshotUrls: ["${prefix}assets/setready-pro-review.png"],
        version: "${app.fallbackVersion}",
        formattedPrice: "${app.fallbackPrice}",
        minimumOsVersion: "${app.fallbackMinOS}",
        contentAdvisoryRating: "4+",
        averageUserRating: null,
        userRatingCount: 0,
        languageCodesISO2A: ["EN","ES","DE","FR","IT","JA","KO","PT","ZH"]
      },
      labels: {
        fallback: ${JSON.stringify(t[lang.code].storeSourceFallback)},
        live: ${JSON.stringify(t[lang.code].storeSourceLive)},
        ratingFallback: ${JSON.stringify(t[lang.code].ratingFallback)}
      }
    };
  </script>
  <script defer src="${prefix}assets/app-store.js"></script>`;
}

function nav(lang, page, prefix) {
  const copy = t[lang.code];
  const options = languages.map((item) => {
    const active = item.code === lang.code ? " nav__lang-option--active" : "";
    return `<a href="${crossLangLink(lang, page, item)}" class="nav__lang-option${active}">${item.label}</a>`;
  }).join("");

  return `<nav class="nav" data-nav>
    <div class="nav__inner">
      <a href="${sameLangLink(page, "home")}" class="nav__brand" aria-label="${app.shortName}">
        <img src="${prefix}assets/icon.png" alt="${app.shortName}" data-store="icon" />
        <span>${app.shortName}</span>
      </a>
      <button class="nav__toggle" type="button" data-menu-toggle aria-label="Menu"><span></span><span></span></button>
      <div class="nav__links" data-menu>
        <a href="${sameLangLink(page, "home")}#features">${copy.navFeatures}</a>
        <a href="${sameLangLink(page, "home")}#system">${copy.navSystem}</a>
        <a href="${sameLangLink(page, "home")}#pricing">${copy.navPricing}</a>
        <a href="${sameLangLink(page, "support")}">${copy.navSupport}</a>
        <div class="nav__lang">
          <button class="nav__lang-btn" type="button" data-lang-toggle aria-label="Change language">${lang.short}</button>
          <div class="nav__lang-menu" data-lang-menu>${options}</div>
        </div>
        <a href="${app.appStoreUrl}" class="nav__cta" data-store-link target="_blank" rel="noopener">${copy.download}</a>
      </div>
    </div>
  </nav>`;
}

function footer(lang, page, prefix) {
  const copy = t[lang.code];
  return `<footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <img src="${prefix}assets/icon.png" alt="${app.shortName}" data-store="icon" />
        <div>
          <strong>${app.shortName}</strong>
          <p>${copy.footerTagline}</p>
        </div>
      </div>
      <div class="footer__links">
        <a href="${sameLangLink(page, "support")}">${copy.navSupport}</a>
        <a href="${sameLangLink(page, "privacy")}">${copy.navPrivacy}</a>
        <a href="${sameLangLink(page, "terms")}">${copy.navTerms}</a>
        <a href="${app.appStoreUrl}" data-store-link target="_blank" rel="noopener">App Store</a>
      </div>
      <p class="footer__fine">&copy; <span data-year></span> ${app.appName}. All rights reserved.</p>
    </div>
  </footer>`;
}

function layout(lang, page, title, description, body) {
  const prefix = rootPrefix(lang, page);
  return `<!DOCTYPE html>
<html lang="${lang.html}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="theme-color" content="#07100d" />
  <link rel="icon" href="${prefix}assets/icon.png" />
  <link rel="apple-touch-icon" href="${prefix}assets/icon.png" />
  <link rel="canonical" href="${canonical(lang, page)}" />
  ${alternates(page)}
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:image" content="${app.baseUrl}assets/icon.png" />
  <meta property="og:type" content="website" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="${prefix}assets/style.css" />
  ${appStoreConfig(lang, prefix)}
</head>
<body>
  ${nav(lang, page, prefix)}
  ${body}
  ${footer(lang, page, prefix)}
  <script defer src="${prefix}assets/site.js"></script>
</body>
</html>
`;
}

const icons = {
  watch: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="4" width="8" height="16" rx="3"></rect><path d="M10 2h4M10 22h4M11 9h2M11 13h2"></path></svg>`,
  rest: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"></circle><path d="M12 7v5l3 2"></path></svg>`,
  heart: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 8.5c0 6-8 10.5-8 10.5S4 14.5 4 8.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 2.5Z"></path><path d="M3 12h4l2-3 3 6 2-3h7"></path></svg>`,
  sync: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 0 1 13.5-5.8"></path><path d="M17 2v5h5"></path><path d="M20 12a8 8 0 0 1-13.5 5.8"></path><path d="M7 22v-5H2"></path></svg>`,
  history: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"></rect><path d="M8 3v4M16 3v4M4 10h16M8 15h3M13 15h3"></path></svg>`,
  report: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l4 4v14H7z"></path><path d="M14 3v5h4M10 13h5M10 17h5"></path></svg>`
};

function featureCard(title, text, icon) {
  const glyph = icons[icon] || icons.heart;
  return `<article class="feature">
    <div class="feature__icon">${glyph}</div>
    <h3>${title}</h3>
    <p>${text}</p>
  </article>`;
}

function indexPage(lang) {
  const copy = t[lang.code];
  const prefix = rootPrefix(lang, "home");
  const body = `<main>
    <section class="hero">
      <div class="hero__field" aria-hidden="true">
        <div class="field-line field-line--one"></div>
        <div class="field-line field-line--two"></div>
        <div class="field-grid"></div>
      </div>
      <div class="hero__inner">
        <div class="hero__copy">
          <div class="eyebrow"><span></span>${copy.badge}</div>
          <h1>${copy.heroTitle}<span>${copy.heroKicker}</span></h1>
          <p class="hero__lead" data-store="description" data-keep-copy="true">${copy.heroText}</p>
          <div class="hero__actions">
            <a href="${app.appStoreUrl}" class="button button--primary" data-store-link target="_blank" rel="noopener">${copy.ctaPrimary}</a>
            <a href="#system" class="button button--ghost">${copy.ctaSecondary}</a>
          </div>
          <div class="store-strip" data-store-source>${copy.storeSourceFallback}</div>
          <div class="store-stats">
            <div><strong data-store="rating">${copy.ratingFallback}</strong><span>${copy.statRating}</span></div>
            <div><strong data-store="version">${app.fallbackVersion}</strong><span>${copy.statVersion}</span></div>
            <div><strong data-store="price">${app.fallbackPrice}</strong><span>${copy.statPrice}</span></div>
            <div><strong data-store="minimum-os">${app.fallbackMinOS}</strong><span>${copy.statRequires}</span></div>
            <div><strong data-store="languages">${app.languagesCount}</strong><span>${copy.statLanguages}</span></div>
          </div>
        </div>
        <div class="hero__visual" aria-label="${copy.liveBadge}">
          <div class="phone">
            <div class="phone__top">
              <span>${copy.liveBadge}</span>
              <span>${copy.watchRequired}</span>
            </div>
            <div class="phone__metric">
              <span>148</span>
              <em>${copy.heroMetricBpm}</em>
            </div>
            <div class="phone__pulse"><i></i><i></i><i></i><i></i><i></i><i></i></div>
            <div class="phone__grid">
              <div><span>${copy.heroMetricRest}</span><strong>54s</strong></div>
              <div><span>${copy.heroMetricGate}</span><strong>${copy.heroReady}</strong></div>
              <div><span>${copy.heroMetricNext}</span><strong>Set 4</strong></div>
            </div>
            <div class="phone__timeline">
              <b style="width: 92%"></b>
              <b style="width: 68%"></b>
              <b style="width: 46%"></b>
            </div>
          </div>
          <div class="watch">
            <span>HR</span>
            <strong>112</strong>
            <small>-36</small>
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="section">
      <div class="section__header">
        <span>${copy.featuresEyebrow}</span>
        <h2>${copy.featuresTitle}</h2>
        <p>${copy.featuresText}</p>
      </div>
      <div class="features">
        ${featureCard(copy.feature1Title, copy.feature1Text, "watch")}
        ${featureCard(copy.feature2Title, copy.feature2Text, "rest")}
        ${featureCard(copy.feature3Title, copy.feature3Text, "heart")}
        ${featureCard(copy.feature4Title, copy.feature4Text, "sync")}
        ${featureCard(copy.feature5Title, copy.feature5Text, "history")}
        ${featureCard(copy.feature6Title, copy.feature6Text, "report")}
      </div>
    </section>

    <section id="system" class="system">
      <div class="system__copy">
        <span>${copy.systemEyebrow}</span>
        <h2>${copy.systemTitle}</h2>
        <p>${copy.systemText}</p>
      </div>
      <div class="signal-stack">
        <article><b>01</b><h3>${copy.signal1Title}</h3><p>${copy.signal1Text}</p></article>
        <article><b>02</b><h3>${copy.signal2Title}</h3><p>${copy.signal2Text}</p></article>
        <article><b>03</b><h3>${copy.signal3Title}</h3><p>${copy.signal3Text}</p></article>
      </div>
    </section>

    <section id="pricing" class="pricing">
      <div class="section__header">
        <span>${copy.proEyebrow}</span>
        <h2>${copy.proTitle}</h2>
        <p>${copy.proText}</p>
      </div>
      <div class="pricing__grid">
        <article class="plan"><h3>${copy.planMonthly}</h3><p>${copy.planMonthlyText}</p><strong data-price-fallback="$2.99">$2.99</strong></article>
        <article class="plan plan--featured"><div>${copy.bestValue}</div><h3>${copy.planYearly}</h3><p>${copy.planYearlyText}</p><strong data-price-fallback="$24.99">$24.99</strong></article>
        <article class="plan"><h3>${copy.planLifetime}</h3><p>${copy.planLifetimeText}</p><strong data-price-fallback="$49.99">$49.99</strong></article>
      </div>
      <div class="pro-list">
        <span>${copy.proFeature1}</span>
        <span>${copy.proFeature2}</span>
        <span>${copy.proFeature3}</span>
        <span>${copy.proFeature4}</span>
      </div>
    </section>

    <section class="showcase">
      <div class="showcase__image">
        <img src="${prefix}assets/setready-pro-review.png" alt="${app.shortName} Pro" data-store-screenshot="0" />
      </div>
      <div class="showcase__copy">
        <h2>${copy.privacyStripTitle}</h2>
        <p>${copy.privacyStripText}</p>
        <a href="${sameLangLink("home", "privacy")}" class="button button--ghost">${copy.learnPrivacy}</a>
      </div>
    </section>

    <section class="faq">
      <h2>${copy.faqTitle}</h2>
      <div class="faq__grid">
        ${copy.faq.map(([q, a]) => `<article><h3>${q}</h3><p>${a}</p></article>`).join("")}
      </div>
    </section>
  </main>`;

  return layout(lang, "home", copy.metaTitle, copy.metaDescription, body);
}

function supportPage(lang) {
  const copy = t[lang.code];
  const body = `<main class="page">
    <section class="page-hero">
      <span>${copy.navSupport}</span>
      <h1>${copy.supportTitle}</h1>
      <p>${copy.supportSubtitle}</p>
    </section>
    <section class="support-layout">
      <article class="support-card">
        <h2>${copy.contactTitle}</h2>
        <p>${copy.contactText}</p>
        <form id="support-form" class="support-form">
          <input type="hidden" name="APP_NAME" value="${app.appName}" />
          <input type="hidden" name="app_name" value="${app.appName}" />
          <input type="hidden" name="subject" id="support-subject" value="[${app.appName}] ${copy.topicOptions[0]}" />
          <input type="text" name="honeypot" tabindex="-1" autocomplete="off" class="honeypot" />
          <label>${copy.name}<input name="from_name" type="text" placeholder="${copy.namePlaceholder}" required /></label>
          <label>${copy.email}<input name="from_email" type="email" placeholder="${copy.emailPlaceholder}" required /></label>
          <label>${copy.topic}<select name="topic" id="support-topic">${copy.topicOptions.map((item) => `<option value="${escapeHtml(item)}">${item}</option>`).join("")}</select></label>
          <label>${copy.message}<textarea name="message" rows="6" placeholder="${copy.messagePlaceholder}" required></textarea></label>
          <button class="button button--primary" id="support-submit" type="submit" data-label="${copy.send}" data-sending="${copy.sending}">${copy.send}</button>
        </form>
        <div class="form-state" id="form-success" hidden><h3>${copy.sentTitle}</h3><p>${copy.sentText}</p><button class="button button--ghost" type="button" data-reset-form>${copy.sendAnother}</button></div>
        <div class="form-alert" id="form-error" hidden>${copy.errorText}</div>
        <div class="form-alert form-alert--warning" id="form-ratelimit" hidden>${copy.tooMany}</div>
      </article>
      <aside class="support-card support-card--dark">
        <h2>${copy.supportFaqTitle}</h2>
        ${copy.supportFaq.map(([q, a]) => `<div class="mini-faq"><h3>${q}</h3><p>${a}</p></div>`).join("")}
      </aside>
    </section>
  </main>
  <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
  <script>
    window.SETREADY_SUPPORT = {
      appName: ${JSON.stringify(app.appName)},
      rateKey: "sr_support_times",
      publicKey: "gywyFhN0zMTHB_pLK",
      serviceId: "service_jvsvznn",
      templateId: "template_5qhkohb",
      defaultTopic: ${JSON.stringify(copy.topicOptions[0])}
    };
  </script>`;

  return layout(lang, "support", `${copy.supportTitle} - ${app.shortName}`, copy.supportSubtitle, body);
}

function legalPage(lang, page) {
  const copy = t[lang.code];
  const isPrivacy = page === "privacy";
  const title = isPrivacy ? copy.privacyTitle : copy.termsTitle;
  const updated = isPrivacy ? copy.privacyUpdated : copy.termsUpdated;
  const intro = isPrivacy ? copy.privacyIntro : copy.termsIntro;
  const sections = isPrivacy ? copy.privacySections : copy.termsSections;
  const extra = isPrivacy
    ? `<section class="legal-card">
        <h2>${copy.privacyLinksTitle}</h2>
        <ul class="policy-links">${copy.privacyLinks.map(([label, href]) => `<li><a href="${href}" target="_blank" rel="noopener">${label}</a></li>`).join("")}</ul>
      </section>`
    : "";

  const body = `<main class="page">
    <section class="page-hero">
      <span>${updated}</span>
      <h1>${title}</h1>
      <p>${intro}</p>
    </section>
    <section class="legal">
      ${sections.map(([heading, text]) => `<article class="legal-card"><h2>${heading}</h2><p>${text}</p></article>`).join("")}
      ${extra}
    </section>
  </main>`;

  return layout(lang, page, `${title} - ${app.shortName}`, intro, body);
}

function siteJs() {
  return `(() => {
  const nav = document.querySelector("[data-nav]");
  const menu = document.querySelector("[data-menu]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const langToggle = document.querySelector("[data-lang-toggle]");
  const langMenu = document.querySelector("[data-lang-menu]");

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const onScroll = () => {
    nav?.classList.toggle("nav--scrolled", window.scrollY > 16);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  toggle?.addEventListener("click", () => {
    menu?.classList.toggle("nav__links--open");
    toggle.classList.toggle("nav__toggle--open");
  });

  langToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    langMenu?.classList.toggle("nav__lang-menu--open");
  });

  document.addEventListener("click", () => {
    langMenu?.classList.remove("nav__lang-menu--open");
  });

  const support = window.SETREADY_SUPPORT;
  if (!support || !window.emailjs) return;

  emailjs.init(support.publicKey);
  const form = document.getElementById("support-form");
  const subject = document.getElementById("support-subject");
  const topic = document.getElementById("support-topic");
  const submit = document.getElementById("support-submit");
  const success = document.getElementById("form-success");
  const error = document.getElementById("form-error");
  const ratelimit = document.getElementById("form-ratelimit");

  const setState = (state) => {
    if (form) form.hidden = state !== "form";
    if (success) success.hidden = state !== "success";
    if (error) error.hidden = state !== "error";
    if (ratelimit) ratelimit.hidden = state !== "ratelimit";
  };

  const canSend = () => {
    const now = Date.now();
    const times = JSON.parse(localStorage.getItem(support.rateKey) || "[]").filter((item) => now - item < 60 * 60 * 1000);
    if (times.length >= 3) return false;
    times.push(now);
    localStorage.setItem(support.rateKey, JSON.stringify(times));
    return true;
  };

  topic?.addEventListener("change", () => {
    if (subject) subject.value = "[" + support.appName + "] " + topic.value;
  });

  document.querySelector("[data-reset-form]")?.addEventListener("click", () => setState("form"));

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.querySelector("input[name='honeypot']")?.value) return;
    if (!canSend()) {
      setState("ratelimit");
      return;
    }
    if (submit) {
      submit.disabled = true;
      submit.textContent = submit.dataset.sending || "Sending...";
    }
    emailjs.sendForm(support.serviceId, support.templateId, form)
      .then(() => {
        form.reset();
        if (subject) subject.value = "[" + support.appName + "] " + support.defaultTopic;
        if (submit) {
          submit.disabled = false;
          submit.textContent = submit.dataset.label || "Send";
        }
        setState("success");
      })
      .catch(() => {
        if (submit) {
          submit.disabled = false;
          submit.textContent = submit.dataset.label || "Send";
        }
        setState("error");
      });
  });
})();`;
}

function appStoreJs() {
  return `(() => {
  const config = window.SETREADY_APPSTORE_CONFIG;
  if (!config) return;

  const fallback = config.fallback || {};
  const labels = config.labels || {};
  const country = ((navigator.language || "en-US").split("-")[1] || "US").toUpperCase();
  const lookupFor = (storeCountry) => "https://itunes.apple.com/lookup?id=" + encodeURIComponent(config.appStoreId) + "&country=" + encodeURIComponent(storeCountry) + "&entity=software";

  const text = (selector, value) => {
    if (value === undefined || value === null || value === "") return;
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = String(value);
    });
  };

  const attr = (selector, name, value) => {
    if (!value) return;
    document.querySelectorAll(selector).forEach((node) => {
      node.setAttribute(name, value);
    });
  };

  const formatSize = (bytes) => {
    const size = Number(bytes);
    if (!Number.isFinite(size) || size <= 0) return null;
    const mb = size / 1024 / 1024;
    return mb >= 100 ? Math.round(mb) + " MB" : mb.toFixed(1) + " MB";
  };

  const formatRating = (rating, count) => {
    const value = Number(rating);
    const total = Number(count);
    if (!Number.isFinite(value) || value <= 0 || !Number.isFinite(total) || total <= 0) return labels.ratingFallback || "New";
    return value.toFixed(1);
  };

  const apply = (data, isLive) => {
    const storeUrl = data.trackViewUrl || fallback.trackViewUrl || config.appStoreUrl;
    const icon = data.artworkUrl512 || data.artworkUrl100 || fallback.artworkUrl512;
    const screenshots = [...(data.screenshotUrls || []), ...(data.ipadScreenshotUrls || []), ...(fallback.screenshotUrls || [])];
    const languages = Array.isArray(data.languageCodesISO2A) && data.languageCodesISO2A.length ? data.languageCodesISO2A.length : (fallback.languageCodesISO2A || []).length;
    const rawMinOS = data.minimumOsVersion || fallback.minimumOsVersion;
    const minOS = /^ios\\b/i.test(String(rawMinOS)) ? rawMinOS : "iOS " + rawMinOS + "+";
    const price = data.formattedPrice || fallback.formattedPrice;
    const description = data.description || "";

    text("[data-store='app-name']", data.trackName || fallback.trackName);
    text("[data-store='rating']", formatRating(data.averageUserRating, data.userRatingCount));
    text("[data-store='version']", data.version || fallback.version);
    text("[data-store='price']", price);
    text("[data-store='minimum-os']", minOS);
    text("[data-store='languages']", languages || "9");
    text("[data-store='content-rating']", data.contentAdvisoryRating || fallback.contentAdvisoryRating);
    text("[data-store-source]", isLive ? labels.live : labels.fallback);

    if (description) {
      document.querySelectorAll("[data-store='description']").forEach((node) => {
        if (node.dataset.keepCopy !== "true") node.textContent = description;
      });
    }

    attr("[data-store-link]", "href", storeUrl);
    attr("[data-store='icon']", "src", icon);
    screenshots.slice(0, 4).forEach((src, index) => {
      attr("[data-store-screenshot='" + index + "']", "src", src);
    });

    const size = formatSize(data.fileSizeBytes);
    if (size) text("[data-store='size']", size);
  };

  const fetchMatch = (storeCountry) => fetch(lookupFor(storeCountry), { cache: "no-store" })
    .then((response) => response.ok ? response.json() : Promise.reject(new Error("lookup failed")))
    .then((payload) => {
      const match = (payload.results || []).find((item) => String(item.trackId) === String(config.appStoreId) || item.bundleId === config.bundleId);
      if (!match) throw new Error("app not public in " + storeCountry);
      return match;
    });

  fetchMatch(country)
    .catch(() => country === "US" ? Promise.reject(new Error("no public app data")) : fetchMatch("US"))
    .then((match) => apply(match, true))
    .catch(() => apply(fallback, false));
})();`;
}

function css() {
  return `@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Manrope:wght@400;500;600;700;800&display=swap');

:root {
  color-scheme: dark;
  --bg: #06100c;
  --bg-2: #0b1712;
  --surface: rgba(18, 31, 25, 0.78);
  --surface-strong: #16241e;
  --text: #f5fbf6;
  --muted: #9fb0a7;
  --line: rgba(221, 255, 233, 0.13);
  --mint: #8fe0ae;
  --teal: #5ed9cf;
  --coral: #ff684f;
  --amber: #f2c14e;
  --sky: #80c7f5;
  --ink: #07100d;
  --font-display: 'Archivo Black', Impact, sans-serif;
  --font-body: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --container: 1180px;
  --nav: 76px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--text);
  background:
    linear-gradient(115deg, rgba(143, 224, 174, 0.08), transparent 30%),
    linear-gradient(245deg, rgba(255, 104, 79, 0.09), transparent 34%),
    var(--bg);
  overflow-x: hidden;
}
a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; }
button, input, textarea, select { font: inherit; }

.nav {
  position: fixed;
  inset: 0 0 auto;
  height: var(--nav);
  z-index: 20;
  transition: background 200ms ease, border-color 200ms ease;
}
.nav--scrolled {
  background: rgba(6, 16, 12, 0.84);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
}
.nav__inner {
  height: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav__brand { display: inline-flex; align-items: center; gap: 10px; font-weight: 900; }
.nav__brand img { width: 38px; height: 38px; border-radius: 11px; object-fit: cover; }
.nav__links { display: flex; align-items: center; gap: 22px; color: var(--muted); font-size: 0.9rem; font-weight: 700; }
.nav__links a:hover { color: var(--text); }
.nav__cta, .button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: 8px;
  padding: 0 18px;
  font-weight: 900;
  color: var(--ink);
  background: var(--mint);
  border: 1px solid rgba(255,255,255,0.16);
  box-shadow: 0 14px 38px rgba(143, 224, 174, 0.20);
  transition: transform 180ms ease, background 180ms ease;
}
.nav__cta:hover, .button:hover { transform: translateY(-2px); background: #a6efc0; }
.button--ghost {
  color: var(--text);
  background: rgba(255,255,255,0.05);
  box-shadow: none;
}
.button--ghost:hover { background: rgba(255,255,255,0.09); }
.nav__toggle { display: none; width: 42px; height: 42px; background: rgba(255,255,255,0.06); border: 1px solid var(--line); border-radius: 8px; }
.nav__toggle span { display: block; width: 18px; height: 2px; background: var(--text); margin: 5px auto; }
.nav__lang { position: relative; }
.nav__lang-btn { min-width: 42px; height: 34px; border: 1px solid var(--line); border-radius: 8px; color: var(--text); background: rgba(255,255,255,0.05); font-weight: 900; cursor: pointer; }
.nav__lang-menu {
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  min-width: 180px;
  padding: 8px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #101d17;
  display: none;
  box-shadow: 0 24px 60px rgba(0,0,0,0.34);
}
.nav__lang-menu--open { display: grid; }
.nav__lang-option { padding: 9px 10px; border-radius: 6px; }
.nav__lang-option--active, .nav__lang-option:hover { color: var(--ink); background: var(--mint); }

.hero {
  min-height: 84vh;
  position: relative;
  display: grid;
  align-items: center;
  padding: calc(var(--nav) + 34px) 22px 52px;
  overflow: hidden;
}
.hero__field { position: absolute; inset: 0; pointer-events: none; opacity: 0.8; }
.field-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, transparent, #000 15%, #000 82%, transparent);
}
.field-line { position: absolute; height: 2px; left: -10%; right: -10%; background: linear-gradient(90deg, transparent, var(--mint), var(--coral), transparent); opacity: 0.58; transform: rotate(-10deg); }
.field-line--one { top: 28%; animation: sweep 7s linear infinite; }
.field-line--two { top: 70%; animation: sweep 10s linear infinite reverse; }
@keyframes sweep { from { transform: translateX(-18%) rotate(-10deg); } to { transform: translateX(18%) rotate(-10deg); } }
.hero__inner {
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(360px, 0.82fr);
  gap: 42px;
  align-items: center;
  position: relative;
}
.hero__copy, .hero__visual { min-width: 0; }
.eyebrow, .section__header span, .system__copy span, .page-hero span {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  color: var(--mint);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  line-height: 1.35;
}
.eyebrow span { width: 9px; height: 9px; background: var(--coral); border-radius: 50%; box-shadow: 0 0 24px var(--coral); }
h1, h2, h3, p { margin: 0; }
.hero h1 {
  margin-top: 20px;
  font-family: var(--font-display);
  font-size: clamp(3.8rem, 8.2vw, 7.6rem);
  line-height: 0.83;
  letter-spacing: 0;
}
.hero h1 span {
  display: block;
  margin-top: 16px;
  font-family: var(--font-body);
  font-size: clamp(1.25rem, 2.6vw, 2.6rem);
  line-height: 1.05;
  color: var(--mint);
  font-weight: 900;
}
.hero__lead { max-width: 690px; margin-top: 26px; color: #c3d1c8; font-size: clamp(1.05rem, 1.7vw, 1.35rem); line-height: 1.65; overflow-wrap: break-word; }
.hero__actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.store-strip { margin-top: 18px; color: var(--amber); font-size: 0.8rem; font-weight: 800; }
.store-stats { margin-top: 18px; display: grid; grid-template-columns: repeat(5, minmax(86px, 1fr)); gap: 10px; max-width: 760px; }
.store-stats div { min-height: 76px; padding: 12px; border: 1px solid var(--line); border-radius: 8px; background: rgba(255,255,255,0.045); }
.store-stats strong { display: block; font-size: 1.05rem; color: var(--text); line-height: 1.15; overflow-wrap: anywhere; }
.store-stats span { display: block; margin-top: 6px; color: var(--muted); font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; }

.hero__visual { position: relative; min-height: 620px; display: grid; place-items: center; }
.phone {
  width: min(360px, 84vw);
  min-height: 620px;
  padding: 24px;
  border: 1px solid rgba(255,255,255,0.16);
  border-radius: 42px;
  background: linear-gradient(160deg, rgba(22,36,30,0.94), rgba(6,16,12,0.96));
  box-shadow: 0 48px 110px rgba(0,0,0,0.46), inset 0 0 0 8px rgba(255,255,255,0.035);
}
.phone__top { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; color: var(--muted); font-size: 0.68rem; font-weight: 900; letter-spacing: 0.08em; }
.phone__metric { margin-top: 56px; display: flex; align-items: end; gap: 12px; }
.phone__metric span { font-family: var(--font-display); font-size: 6rem; line-height: 0.82; color: var(--coral); }
.phone__metric em { font-style: normal; color: var(--muted); font-weight: 900; }
.phone__pulse { height: 150px; display: flex; align-items: end; gap: 8px; margin: 36px 0; }
.phone__pulse i { flex: 1; border-radius: 6px 6px 2px 2px; background: linear-gradient(to top, var(--mint), var(--teal)); animation: bar 1.2s ease-in-out infinite; }
.phone__pulse i:nth-child(1) { height: 36%; }
.phone__pulse i:nth-child(2) { height: 66%; animation-delay: 90ms; }
.phone__pulse i:nth-child(3) { height: 42%; animation-delay: 180ms; background: linear-gradient(to top, var(--amber), var(--mint)); }
.phone__pulse i:nth-child(4) { height: 84%; animation-delay: 270ms; background: linear-gradient(to top, var(--coral), var(--amber)); }
.phone__pulse i:nth-child(5) { height: 52%; animation-delay: 360ms; }
.phone__pulse i:nth-child(6) { height: 72%; animation-delay: 450ms; }
@keyframes bar { 50% { transform: scaleY(0.72); opacity: 0.72; } }
.phone__grid { display: grid; gap: 10px; margin-right: 58px; }
.phone__grid div { display: flex; justify-content: space-between; padding: 14px; border: 1px solid var(--line); border-radius: 8px; background: rgba(255,255,255,0.045); }
.phone__grid span { color: var(--muted); font-weight: 800; }
.phone__grid strong { color: var(--mint); }
.phone__timeline { display: grid; gap: 10px; margin-top: 24px; margin-right: 58px; }
.phone__timeline b { display: block; height: 8px; border-radius: 999px; background: linear-gradient(90deg, var(--mint), var(--coral)); }
.watch {
  position: absolute;
  right: 2%;
  bottom: 72px;
  width: 138px;
  height: 170px;
  border-radius: 38px;
  padding: 24px 18px;
  display: grid;
  place-items: center;
  background: #0a0f0d;
  border: 9px solid #26352f;
  box-shadow: 0 28px 80px rgba(0,0,0,0.45);
}
.watch span { color: var(--muted); font-weight: 900; font-size: 0.76rem; }
.watch strong { font-size: 3rem; color: var(--mint); }
.watch small { color: var(--coral); font-weight: 900; }

.section, .pricing, .faq { max-width: var(--container); margin: 0 auto; padding: 105px 22px; }
.section__header { max-width: 760px; margin-bottom: 34px; }
.section__header h2, .system h2, .showcase h2, .faq h2, .page-hero h1 {
  margin-top: 12px;
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5vw, 5rem);
  line-height: 0.95;
}
.section__header p, .system__copy p, .showcase p, .page-hero p { margin-top: 18px; color: #bfcec5; font-size: 1.08rem; line-height: 1.75; }
.features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.feature, .plan, .legal-card, .support-card, .faq article {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: rgba(255,255,255,0.05);
  box-shadow: 0 28px 70px rgba(0,0,0,0.18);
}
.feature { min-height: 250px; padding: 22px; }
.feature__icon { width: 58px; height: 40px; display: grid; place-items: center; margin-bottom: 34px; color: var(--ink); background: var(--mint); border-radius: 8px; font-size: 0.7rem; font-weight: 900; }
.feature__icon svg { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round; }
.feature:nth-child(2) .feature__icon, .feature:nth-child(5) .feature__icon { background: var(--amber); }
.feature:nth-child(3) .feature__icon, .feature:nth-child(6) .feature__icon { background: var(--coral); }
.feature h3, .signal-stack h3, .plan h3, .faq h3, .legal-card h2, .support-card h2 { font-size: 1.25rem; line-height: 1.2; }
.feature p, .signal-stack p, .plan p, .faq p, .legal-card p, .support-card p, .mini-faq p { margin-top: 10px; color: var(--muted); line-height: 1.7; }

.system {
  max-width: var(--container);
  margin: 0 auto;
  padding: 96px 22px;
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  gap: 22px;
}
.system__copy { position: sticky; top: 118px; align-self: start; }
.signal-stack { display: grid; gap: 14px; }
.signal-stack article { min-height: 190px; padding: 28px; border-radius: 8px; border: 1px solid var(--line); background: linear-gradient(135deg, rgba(143,224,174,0.12), rgba(255,255,255,0.04)); }
.signal-stack b { color: var(--coral); font-size: 0.86rem; letter-spacing: 0.12em; }

.pricing__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.plan { position: relative; min-height: 245px; padding: 24px; }
.plan--featured { background: linear-gradient(160deg, rgba(143,224,174,0.18), rgba(128,199,245,0.08)); border-color: rgba(143,224,174,0.46); transform: translateY(-14px); }
.plan--featured div { display: inline-flex; padding: 7px 10px; margin-bottom: 18px; border-radius: 6px; background: var(--amber); color: var(--ink); font-size: 0.75rem; font-weight: 900; text-transform: uppercase; }
.plan strong { position: absolute; left: 24px; bottom: 24px; font-size: 2rem; color: var(--mint); overflow-wrap: anywhere; }
.pro-list { margin-top: 18px; display: flex; flex-wrap: wrap; gap: 10px; }
.pro-list span { padding: 10px 12px; border-radius: 8px; color: var(--muted); border: 1px solid var(--line); background: rgba(255,255,255,0.04); font-weight: 800; }

.showcase {
  max-width: var(--container);
  margin: 0 auto;
  padding: 90px 22px;
  display: grid;
  grid-template-columns: minmax(280px, 0.58fr) 1fr;
  gap: 50px;
  align-items: center;
}
.showcase__image { max-height: 720px; overflow: hidden; border-radius: 8px; border: 1px solid var(--line); box-shadow: 0 44px 90px rgba(0,0,0,0.38); }
.showcase__image img { width: 100%; object-fit: cover; }

.faq__grid { margin-top: 28px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.faq article { padding: 22px; }

.page { padding: calc(var(--nav) + 55px) 22px 90px; }
.page-hero { max-width: 900px; margin: 0 auto 42px; text-align: center; }
.support-layout { max-width: 980px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr); gap: 18px; }
.support-card { padding: 26px; }
.support-card--dark { background: #0b1511; }
.support-form { display: grid; gap: 14px; margin-top: 22px; }
.support-form label { display: grid; gap: 7px; color: var(--muted); font-weight: 900; font-size: 0.84rem; }
.support-form input, .support-form textarea, .support-form select {
  width: 100%;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.055);
  color: var(--text);
  border-radius: 8px;
  padding: 13px 14px;
  outline: none;
}
.support-form textarea { resize: vertical; min-height: 150px; }
.support-form input:focus, .support-form textarea:focus, .support-form select:focus { border-color: rgba(143,224,174,0.72); }
.honeypot { position: absolute; left: -9999px; opacity: 0; width: 0; height: 0; }
.form-state, .form-alert { margin-top: 18px; padding: 18px; border: 1px solid rgba(143,224,174,0.35); border-radius: 8px; background: rgba(143,224,174,0.08); }
.form-alert { border-color: rgba(255,104,79,0.38); background: rgba(255,104,79,0.09); }
.form-alert--warning { border-color: rgba(242,193,78,0.42); background: rgba(242,193,78,0.09); }
.mini-faq { padding: 18px 0; border-top: 1px solid var(--line); }
.mini-faq:first-of-type { border-top: 0; }

.legal { max-width: 880px; margin: 0 auto; display: grid; gap: 14px; }
.legal-card { padding: 24px; }
.policy-links { margin: 14px 0 0; padding: 0; list-style: none; display: grid; gap: 10px; }
.policy-links a { color: var(--mint); font-weight: 900; }

.footer { border-top: 1px solid var(--line); padding: 36px 22px; background: rgba(0,0,0,0.18); }
.footer__inner { max-width: var(--container); margin: 0 auto; display: grid; grid-template-columns: 1fr auto; gap: 18px; align-items: center; }
.footer__brand { display: flex; align-items: center; gap: 12px; }
.footer__brand img { width: 42px; height: 42px; border-radius: 10px; object-fit: cover; }
.footer__brand p, .footer__fine { color: var(--muted); font-size: 0.88rem; }
.footer__links { display: flex; flex-wrap: wrap; gap: 16px; color: var(--muted); font-weight: 800; }
.footer__links a:hover { color: var(--text); }
.footer__fine { grid-column: 1 / -1; }

@media (max-width: 960px) {
  .hero__inner, .system, .showcase, .support-layout { grid-template-columns: 1fr; }
  .hero__visual { min-height: 560px; }
  .system__copy { position: static; }
  .features, .pricing__grid { grid-template-columns: repeat(2, 1fr); }
  .store-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 740px) {
  .nav__toggle { display: block; }
  .nav__links {
    position: fixed;
    inset: var(--nav) 12px auto;
    display: none;
    padding: 16px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: #0b1511;
    flex-direction: column;
    align-items: stretch;
  }
  .nav__links--open { display: flex; }
  .nav__lang-menu { position: static; margin-top: 8px; }
  .features, .pricing__grid, .faq__grid { grid-template-columns: 1fr; }
  .plan--featured { transform: none; }
  .hero { padding-top: calc(var(--nav) + 34px); }
  .hero h1 { font-size: clamp(3.1rem, 16vw, 4.7rem); }
  .hero__visual { min-height: 500px; }
  .phone { min-height: 540px; }
  .phone__grid, .phone__timeline { margin-right: 0; }
  .phone__metric span { font-size: 4.8rem; }
  .watch { right: 0; bottom: 32px; transform: scale(0.86); }
  .footer__inner { grid-template-columns: 1fr; }
}
@media (max-width: 520px) {
  .store-stats { grid-template-columns: 1fr; }
}`;
}

function readme() {
  return `# landing-setready

Static multilingual landing page for **${app.appName}**.

## App Store data

The site is prepared to use public App Store data through iTunes Lookup:

- App Store ID: \`${app.appStoreId}\`
- Bundle ID: \`${app.bundleId}\`
- Fallback URL: ${app.appStoreUrl}

\`assets/app-store.js\` fetches Apple data at runtime and falls back to local values when the app is not public yet or lookup fails.

## EmailJS

The support form sends both \`APP_NAME\` and \`app_name\` with value:

\`${app.appName}\`

This keeps support communications separated by app in the shared EmailJS template.

## Build

\`\`\`bash
node scripts/build.mjs
\`\`\`
`;
}

function write(file, contents) {
  const full = join(root, file);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, contents);
}

write("assets/style.css", css());
write("assets/site.js", siteJs());
write("assets/app-store.js", appStoreJs());
write("README.md", readme());
write(".gitignore", ".DS_Store\nnode_modules\n");

for (const lang of languages) {
  write(pagePath(lang, "home"), indexPage(lang));
  write(pagePath(lang, "support"), supportPage(lang));
  write(pagePath(lang, "privacy"), legalPage(lang, "privacy"));
  write(pagePath(lang, "terms"), legalPage(lang, "terms"));
}

console.log(`Generated SetReady landing in ${root}`);
