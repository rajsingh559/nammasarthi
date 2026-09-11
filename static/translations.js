/* ==========================================================================
   NAMMA SARTHI — MULTILINGUAL TRANSLATION DICTIONARY (EN, KN, HI)
   ========================================================================== */

const TRANSLATIONS = {
    en: {
        // Navbar & Common
        brand_title: "NAMMA SARTHI",
        nav_home: "Home",
        nav_passenger: "Passenger Portal",
        nav_driver: "Driver Portal",
        footer_title: "Namma Sarthi — Live Government Bus Tracking System",
        footer_sub: "Karnataka KSRTC Routes • Live Bus Tracking System",
        lang_label: "🌐 Language",

        // Home Page
        hero_title: "NAMMA SARTHI",
        hero_subtitle: "Your Bus. Your Route. Your Time.",
        hero_desc: "Namma Sarthi helps passengers track government buses in real time and helps drivers communicate delays and unexpected stoppages instantly.",
        role_passenger_title: "Passenger",
        role_passenger_desc: "Select your source and destination to find live buses, view real-time location on map, check ETAs, and receive delay alerts.",
        btn_track_bus: "Track Your Bus",
        link_login: "Login",
        link_register: "Register",
        role_driver_title: "Driver",
        role_driver_desc: "Select your official KSRTC dataset route, start your journey with Real Live GPS, and report stoppages.",
        btn_start_journey: "Start Your Journey",
        feature1_title: "Real GPS Tracking",
        feature1_desc: "Driver browser streams precise live location every 5 seconds to provide accurate map updates.",
        feature2_title: "Accurate Route ETAs",
        feature2_desc: "Calculates stop ETAs and destination arrival times directly using cumulative route distances and travel times.",
        feature3_title: "Stoppage Detection",
        feature3_desc: "Detects 10-minute bus stoppages and prompts drivers for reasons (traffic, breakdowns, roadworks) to alert passengers.",

        // Passenger Dashboard
        find_bus_title: "🔍 Search Government Bus Routes",
        find_bus_sub: "Select your starting stop and destination from our dataset",
        label_source_stop: "Source Stop",
        label_dest_stop: "Destination Stop",
        select_source_ph: "-- Select Source ▼ --",
        select_dest_ph: "-- Select Source First --",
        btn_search_buses: "SEARCH BUSES",
        live_current_time: "CURRENT TIME",
        searching_loading: "Searching for live buses on route...",
        no_buses_found: "No live buses found for this route.",
        no_buses_sub: "Ensure a driver has registered and started a journey on this route in the Driver Portal.",

        // Bus Card & Timeline Breakdown
        your_stop: "📍 YOUR STOP",
        your_journey: "🚌 YOUR JOURNEY",
        destination: "🏁 DESTINATION",
        arriving_at: "ARRIVING AT",
        reaching_at: "REACHING AT",
        min_from_now: "min from now",
        from_stop_to_dest: "from your stop to destination",
        reached_your_stop: "Bus has reached your stop",
        arriving_now: "Arriving now",
        reached_dest: "Bus has reached destination",
        arrival_unavailable: "Arrival time unavailable",
        journey_unavailable: "Journey duration unavailable",
        btn_view_map: "🗺️ VIEW LIVE MAP",
        current_stop_label: "Current Stop:",
        next_stop_label: "Next Stop:",
        dist_to_your_stop_label: "Distance to Your Stop:",
        service_type_label: "Service:",
        bus_delayed_warning: "⚠️ BUS DELAYED",
        reason_label: "Reason:",
        status_live: "🟢 LIVE",
        status_delayed: "🟠 DELAYED",
        status_stopped: "🟠 STOPPED",

        // Driver Dashboard
        driver_dashboard_title: "Driver Dashboard",
        welcome_driver: "Welcome",
        start_new_journey: "🚀 Start New Bus Journey",
        assigned_route: "Assigned KSRTC Route",
        select_route_ph: "-- Select Assigned Route ▼ --",
        btn_start_gps: "START JOURNEY WITH REAL GPS",
        active_journey: "🚌 Active Bus Journey",
        btn_stop_journey: "🔴 STOP JOURNEY",
        stoppage_alert_title: "⚠️ 10-MINUTE BUS STOPPAGE DETECTED",
        stoppage_alert_desc: "The bus location has not changed for 10 minutes. Please select a reason to inform passengers:",
        reason_traffic: "🚦 Heavy Traffic Jam",
        reason_breakdown: "🛠️ Vehicle Breakdown",
        reason_weather: "🌧️ Heavy Rain / Weather",
        reason_roadworks: "🚧 Road Construction Work",

        // Auth Pages
        passenger_login_title: "Passenger Login",
        driver_login_title: "Driver Login",
        passenger_reg_title: "Passenger Registration",
        driver_reg_title: "Driver Registration",
        phone_label: "Phone Number",
        password_label: "Password",
        name_label: "Full Name",
        bus_num_label: "Bus Number",
        btn_login: "LOGIN",
        btn_register: "REGISTER",
        no_account: "Don't have an account?",
        already_account: "Already have an account?"
    },
    kn: {
        // Navbar & Common
        brand_title: "ನಮ್ಮ ಸಾರಥಿ",
        nav_home: "ಮುಖ್ಯ ಪುಟ",
        nav_passenger: "ಪ್ರಯಾಣಿಕರ ಪೋರ್ಟಲ್",
        nav_driver: "ಚಾಲಕರ ಪೋರ್ಟಲ್",
        footer_title: "ನಮ್ಮ ಸಾರಥಿ — ನೇರ ಸರ್ಕಾರಿ ಬಸ್ ಟ್ರ್ಯಾಕಿಂಗ್ ವ್ಯವಸ್ಥೆ",
        footer_sub: "ಕರ್ನಾಟಕ KSRTC ಮಾರ್ಗಗಳು • ಲೈವ್ ಬಸ್ ಟ್ರ್ಯಾಕಿಂಗ್ ವ್ಯವಸ್ಥೆ",
        lang_label: "🌐 ಭಾಷೆ",

        // Home Page
        hero_title: "ನಮ್ಮ ಸಾರಥಿ",
        hero_subtitle: "ನಿಮ್ಮ ಬಸ್. ನಿಮ್ಮ ಮಾರ್ಗ. ನಿಮ್ಮ ಸಮಯ.",
        hero_desc: "ನಮ್ಮ ಸಾರಥಿ ಪ್ರಯಾಣಿಕರಿಗೆ ಸರ್ಕಾರಿ ಬಸ್‌ಗಳನ್ನು ನೈಜ ಸಮಯದಲ್ಲಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಮತ್ತು ಚಾಲಕರಿಗೆ ವಿಳಂಬಗಳನ್ನು ತಕ್ಷಣ ಸಂವಹನ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
        role_passenger_title: "ಪ್ರಯಾಣಿಕರು",
        role_passenger_desc: "ಲೈವ್ ಬಸ್‌ಗಳನ್ನು ಹುಡುಕಲು, ನಕ್ಷೆಯಲ್ಲಿ ನೈಜ-ಸಮಯದ ಸ್ಥಳವನ್ನು ವೀಕ್ಷಿಸಲು, ETAಗಳನ್ನು ಪರೀಕ್ಷಿಸಲು ನಿಮ್ಮ ಮೂಲ ಮತ್ತು ಗಮ್ಯಸ್ಥಾನವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
        btn_track_bus: "ನಿಮ್ಮ ಬಸ್ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
        link_login: "ಲಾಗಿನ್",
        link_register: "ನೋಂದಣಿ",
        role_driver_title: "ಚಾಲಕರು",
        role_driver_desc: "ನಿಮ್ಮ ಅಧಿಕೃತ KSRTC ಮಾರ್ಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ, ರಿಯಲ್ ಲೈವ್ GPS ನೊಂದಿಗೆ ನಿಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿ ಮತ್ತು ನಿಲುಗಡೆಗಳನ್ನು ವರದಿ ಮಾಡಿ.",
        btn_start_journey: "ನಿಮ್ಮ ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಿ",
        feature1_title: "ರಿಯಲ್ ಜಿಪಿಎಸ್ ಟ್ರ್ಯಾಕಿಂಗ್",
        feature1_desc: "ನಿಖರವಾದ ನಕ್ಷೆ ನವೀಕರಣಗಳನ್ನು ಒದಗಿಸಲು ಚಾಲಕರ ಬ್ರೌಸರ್ ಪ್ರತಿ 5 ಸೆಕೆಂಡಿಗೆ ಲೈವ್ ಸ್ಥಳವನ್ನು ಕಳುಹಿಸುತ್ತದೆ.",
        feature2_title: "ನಿಖರವಾದ ಮಾರ್ಗದ ETA ಗಳು",
        feature2_desc: "ಸಂಚಿತ ಮಾರ್ಗದ ದೂರಗಳು ಮತ್ತು ಪ್ರಯಾಣದ ಸಮಯಗಳನ್ನು ಬಳಸಿಕೊಂಡು ನಿಲ್ದಾಣದ ETA ಮತ್ತು ಆಗಮನದ ಸಮಯವನ್ನು ಲೆಕ್ಕಾಚಾರ ಮಾಡುತ್ತದೆ.",
        feature3_title: "ನಿಲುಗಡೆ ಪತ್ತೆ",
        feature3_desc: "10-ನಿಮಿಷಗಳ ಬಸ್ ನಿಲುಗಡೆಗಳನ್ನು ಪತ್ತೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಪ್ರಯಾಣಿಕರಿಗೆ ಎಚ್ಚರಿಕೆ ನೀಡಲು ಚಾಲಕರಿಗೆ ಕಾರಣಗಳನ್ನು ಕೇಳುತ್ತದೆ.",

        // Passenger Dashboard
        find_bus_title: "🔍 ಸರ್ಕಾರಿ ಬಸ್ ಮಾರ್ಗಗಳನ್ನು ಹುಡುಕಿ",
        find_bus_sub: "ನಮ್ಮ ಡೇಟಾಸೆಟ್‌ನಿಂದ ನಿಮ್ಮ ನಿರ್ಗಮನ ನಿಲ್ದಾಣ ಮತ್ತು ಗಮ್ಯಸ್ಥಾನವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        label_source_stop: "ಪ್ರಾರಂಭದ ನಿಲ್ದಾಣ",
        label_dest_stop: "ಗಮ್ಯಸ್ಥಾನದ ನಿಲ್ದಾಣ",
        select_source_ph: "-- ಮೂಲವನ್ನು ಆಯ್ಕೆಮಾಡಿ ▼ --",
        select_dest_ph: "-- ಮೊದಲು ಮೂಲವನ್ನು ಆಯ್ಕೆಮಾಡಿ --",
        btn_search_buses: "ಬಸ್‌ಗಳನ್ನು ಹುಡುಕಿ",
        live_current_time: "ಪ್ರಸ್ತುತ ಸಮಯ",
        searching_loading: "ಮಾರ್ಗದಲ್ಲಿ ಲೈವ್ ಬಸ್‌ಗಳಿಗಾಗಿ ಹುಡುಕಲಾಗುತ್ತಿದೆ...",
        no_buses_found: "ಈ ಮಾರ್ಗದಲ್ಲಿ ಯಾವುದೇ ಲೈವ್ ಬಸ್‌ಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
        no_buses_sub: "ಚಾಲಕರು ಚಾಲಕ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಈ ಮಾರ್ಗದಲ್ಲಿ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿದ್ದಾರೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",

        // Bus Card & Timeline Breakdown
        your_stop: "📍 ನಿಮ್ಮ ನಿಲ್ದಾಣ",
        your_journey: "🚌 ನಿಮ್ಮ ಪ್ರಯಾಣ",
        destination: "🏁 ಗಮ್ಯಸ್ಥಾನ",
        arriving_at: "ಆಗಮಿಸುವ ಸಮಯ",
        reaching_at: "ತಲುಪುವ ಸಮಯ",
        min_from_now: "ನಿಮಿಷಗಳ ನಂತರ",
        from_stop_to_dest: "ನಿಮ್ಮ ನಿಲ್ದಾಣದಿಂದ ಗಮ್ಯಸ್ಥಾನಕ್ಕೆ",
        reached_your_stop: "ಬಸ್ ನಿಮ್ಮ ನಿಲ್ದಾಣವನ್ನು ತಲುಪಿದೆ",
        arriving_now: "ಈಗ ತಲುಪುತ್ತಿದೆ",
        reached_dest: "ಬಸ್ ಗಮ್ಯಸ್ಥಾನವನ್ನು ತಲುಪಿದೆ",
        arrival_unavailable: "ಆಗಮನದ ಸಮಯ ಲಭ್ಯವಿಲ್ಲ",
        journey_unavailable: "ಪ್ರಯಾಣದ ಅವಧಿ ಲಭ್ಯವಿಲ್ಲ",
        btn_view_map: "🗺️ ಲೈವ್ ನಕ್ಷೆ ವೀಕ್ಷಿಸಿ",
        current_stop_label: "ಪ್ರಸ್ತುತ ನಿಲ್ದಾಣ:",
        next_stop_label: "ಮುಂದಿನ ನಿಲ್ದಾಣ:",
        dist_to_your_stop_label: "ನಿಮ್ಮ ನಿಲ್ದಾಣಕ್ಕೆ ದೂರ:",
        service_type_label: "ಸೇವೆ:",
        bus_delayed_warning: "⚠️ ಬಸ್ ವಿಳಂಬವಾಗಿದೆ",
        reason_label: "ಕಾರಣ:",
        status_live: "🟢 ಲೈವ್",
        status_delayed: "🟠 ವಿಳಂಬ",
        status_stopped: "🟠 ನಿಂತಿದೆ",

        // Driver Dashboard
        driver_dashboard_title: "ಚಾಲಕರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        welcome_driver: "ಸ್ವಾಗತ",
        start_new_journey: "🚀 ಹೊಸ ಬಸ್ ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಿ",
        assigned_route: "ನಿಯೋಜಿತ KSRTC ಮಾರ್ಗ",
        select_route_ph: "-- ನಿಯೋಜಿತ ಮಾರ್ಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ ▼ --",
        btn_start_gps: "ರಿಯಲ್ ಜಿಪಿಎಸ್‌ನೊಂದಿಗೆ ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಿ",
        active_journey: "🚌 ಸಕ್ರಿಯ ಬಸ್ ಪ್ರಯಾಣ",
        btn_stop_journey: "🔴 ಪ್ರಯಾಣ ಕೊನೆಗೊಳಿಸಿ",
        stoppage_alert_title: "⚠️ 10-ನಿಮಿಷಗಳ ಬಸ್ ನಿಲುಗಡೆ ಪತ್ತೆಯಾಗಿದೆ",
        stoppage_alert_desc: "ಬಸ್ ಸ್ಥಳ 10 ನಿಮಿಷಗಳಿಂದ ಬದಲಾಗಿಲ್ಲ. ಪ್ರಯಾಣಿಕರಿಗೆ ತಿಳಿಸಲು ಕಾರಣವನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
        reason_traffic: "🚦 ಭಾರಿ ಸಂಚಾರ ದಟ್ಟಣೆ",
        reason_breakdown: "🛠️ ವಾಹನ ಕೆಟ್ಟುಹೋಗಿದೆ",
        reason_weather: "🌧️ ಭಾರಿ ಮಳೆ / ಹವಾಮಾನ",
        reason_roadworks: "🚧 ರಸ್ತೆ ದುರಸ್ತಿ ಕಾಮಗಾರಿ",

        // Auth Pages
        passenger_login_title: "ಪ್ರಯಾಣಿಕರ ಲಾಗಿನ್",
        driver_login_title: "ಚಾಲಕರ ಲಾಗಿನ್",
        passenger_reg_title: "ಪ್ರಯಾಣಿಕರ ನೋಂದಣಿ",
        driver_reg_title: "ಚಾಲಕರ ನೋಂದಣಿ",
        phone_label: "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
        password_label: "ಪಾಸ್‌ವರ್ಡ್",
        name_label: "ಪೂರ್ಣ ಹೆಸರು",
        bus_num_label: "ಬಸ್ ಸಂಖ್ಯೆ",
        btn_login: "ಲಾಗಿನ್",
        btn_register: "ನೋಂದಣಿ ಮಾಡಿ",
        no_account: "ಖಾತೆ ಇಲ್ಲವೇ?",
        already_account: "ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?"
    },
    hi: {
        // Navbar & Common
        brand_title: "नम्मा सारथी",
        nav_home: "होम",
        nav_passenger: "यात्री पोर्टल",
        nav_driver: "ड्राइवर पोर्टल",
        footer_title: "नम्मा सारथी — लाइव सरकारी बस ट्रैकिंग सिस्टम",
        footer_sub: "कर्नाटक KSRTC रूट • लाइव बस ट्रैकिंग सिस्टम",
        lang_label: "🌐 भाषा",

        // Home Page
        hero_title: "नम्मा सारथी",
        hero_subtitle: "आपकी बस। आपका रूट। आपका समय।",
        hero_desc: "नम्मा सारथी यात्रियों को वास्तविक समय में सरकारी बसों को ट्रैक करने और ड्राइवरों को देरी की तुरंत सूचना देने में मदद करता है।",
        role_passenger_title: "यात्री",
        role_passenger_desc: "लाइव बसें ढूंढने, मानचित्र पर वास्तविक समय स्थान देखने, ईटीए जांचने और देरी के अलर्ट प्राप्त करने के लिए अपना स्रोत और गंतव्य चुनें।",
        btn_track_bus: "अपनी बस ट्रैक करें",
        link_login: "लॉगिन",
        link_register: "रजिस्टर",
        role_driver_title: "ड्राइवर",
        role_driver_desc: "अपना आधिकारिक KSRTC रूट चुनें, रियल लाइव जीपीएस के साथ अपनी यात्रा शुरू करें और रुकावटों की रिपोर्ट करें।",
        btn_start_journey: "अपनी यात्रा शुरू करें",
        feature1_title: "रियल जीपीएस ट्रैकिंग",
        feature1_desc: "सटीक मानचित्र अपडेट प्रदान करने के लिए ड्राइवर ब्राउज़र हर 5 सेकंड में लाइव स्थान भेजता है।",
        feature2_title: "सटीक रूट ईटीए",
        feature2_desc: "संचयी मार्ग दूरियों और यात्रा समय का उपयोग करके स्टॉप ईटीए और गंतव्य आगमन समय की गणना करता है।",
        feature3_title: "रुकावट का पता लगाना",
        feature3_desc: "10 मिनट की बस रुकावटों का पता लगाता है और यात्रियों को सचेत करने के लिए ड्राइवरों से कारण पूछता है।",

        // Passenger Dashboard
        find_bus_title: "🔍 सरकारी बस रूट खोजें",
        find_bus_sub: "हमारे डेटासेट से अपना शुरुआती स्टॉप और गंतव्य चुनें",
        label_source_stop: "प्रारंभिक स्टॉप",
        label_dest_stop: "गंतव्य स्टॉप",
        select_source_ph: "-- स्रोत चुनें ▼ --",
        select_dest_ph: "-- पहले स्रोत चुनें --",
        btn_search_buses: "बसें खोजें",
        live_current_time: "वर्तमान समय",
        searching_loading: "रूट पर लाइव बसों की खोज की जा रही है...",
        no_buses_found: "इस रूट के लिए कोई लाइव बस नहीं मिली।",
        no_buses_sub: "सुनिश्चित करें कि ड्राइवर ने ड्राइवर पोर्टल में इस रूट पर यात्रा शुरू की है।",

        // Bus Card & Timeline Breakdown
        your_stop: "📍 आपका स्टॉप",
        your_journey: "🚌 आपकी यात्रा",
        destination: "🏁 गंतव्य",
        arriving_at: "आगमन समय",
        reaching_at: "पहुंचने का समय",
        min_from_now: "मिनट बाद",
        from_stop_to_dest: "आपके स्टॉप से गंतव्य तक",
        reached_your_stop: "बस आपके स्टॉप पर पहुंच गई है",
        arriving_now: "अभी आ रही है",
        reached_dest: "बस गंतव्य पर पहुंच गई है",
        arrival_unavailable: "आगमन समय उपलब्ध नहीं है",
        journey_unavailable: "यात्रा अवधि उपलब्ध नहीं है",
        btn_view_map: "🗺️ लाइव मैप देखें",
        current_stop_label: "वर्तमान स्टॉप:",
        next_stop_label: "अगला स्टॉप:",
        dist_to_your_stop_label: "आपके स्टॉप की दूरी:",
        service_type_label: "सेवा:",
        bus_delayed_warning: "⚠️ बस में देरी",
        reason_label: "कारण:",
        status_live: "🟢 लाइव",
        status_delayed: "🟠 देरी",
        status_stopped: "🟠 रुकी हुई",

        // Driver Dashboard
        driver_dashboard_title: "ड्राइवर डैशबोर्ड",
        welcome_driver: "स्वागत है",
        start_new_journey: "🚀 नई बस यात्रा शुरू करें",
        assigned_route: "आवंटित KSRTC रूट",
        select_route_ph: "-- आवंटित रूट चुनें ▼ --",
        btn_start_gps: "रियल जीपीएस के साथ यात्रा शुरू करें",
        active_journey: "🚌 सक्रिय बस यात्रा",
        btn_stop_journey: "🔴 यात्रा समाप्त करें",
        stoppage_alert_title: "⚠️ 10-मिनट की बस रुकावट का पता चला",
        stoppage_alert_desc: "बस का स्थान 10 मिनट से नहीं बदला है। कृपया यात्रियों को सूचित करने के लिए एक कारण चुनें:",
        reason_traffic: "🚦 भारी ट्रैफिक जाम",
        reason_breakdown: "🛠️ वाहन खराब होना",
        reason_weather: "🌧️ भारी बारिश / मौसम",
        reason_roadworks: "🚧 सड़क निर्माण कार्य",

        // Auth Pages
        passenger_login_title: "यात्री लॉगिन",
        driver_login_title: "ड्राइवर लॉगिन",
        passenger_reg_title: "यात्री पंजीकरण",
        driver_reg_title: "ड्राइवर पंजीकरण",
        phone_label: "फोन नंबर",
        password_label: "पासवर्ड",
        name_label: "पूरा नाम",
        bus_num_label: "बस नंबर",
        btn_login: "लॉगिन",
        btn_register: "रजिस्टर करें",
        no_account: "खाता नहीं है?",
        already_account: "पहले से खाता है?"
    }
};

/**
 * Get translation string for given key in current language
 */
function t(key, defaultText = '') {
    const currentLang = getCurrentLanguage();
    if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
        return TRANSLATIONS[currentLang][key];
    }
    if (TRANSLATIONS['en'] && TRANSLATIONS['en'][key]) {
        return TRANSLATIONS['en'][key];
    }
    return defaultText || key;
}

/**
 * Get current active language code (defaults to 'en')
 */
function getCurrentLanguage() {
    return localStorage.getItem('namma_lang') || 'en';
}

/**
 * Switch current language and apply translations to DOM
 */
function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    localStorage.setItem('namma_lang', lang);
    applyTranslations();
}

/**
 * Apply translations to all DOM elements with data-i18n attribute
 */
function applyTranslations() {
    const currentLang = getCurrentLanguage();
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (key && TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
            if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
                if (elem.hasAttribute('placeholder')) {
                    elem.placeholder = TRANSLATIONS[currentLang][key];
                } else {
                    elem.value = TRANSLATIONS[currentLang][key];
                }
            } else {
                elem.textContent = TRANSLATIONS[currentLang][key];
            }
        }
    });

    // Update language select dropdown value if present
    const langSelect = document.getElementById('nav-language-select');
    if (langSelect) {
        langSelect.value = currentLang;
    }

    // Trigger custom event for dynamic components to update
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
}

// Auto init on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();

    const langSelect = document.getElementById('nav-language-select');
    if (langSelect) {
        langSelect.value = getCurrentLanguage();
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }
});
