
IF EXIST app-plan-de-estudios.apk DEL /F app-plan-de-estudios.apk

"C:\Program Files\Android\Android Studio\jre\bin\jarsigner" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore ".\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk" plan-de-estudios

"C:\Users\Mati\AppData\Local\Android\Sdk\build-tools\27.0.3\zipalign" -v 4 ".\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk" app-plan-de-estudios.apk