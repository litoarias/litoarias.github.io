# landing-setready

Static multilingual landing page for **SetReady: Adaptive Rest Timer**.

## App Store data

The site is prepared to use public App Store data through iTunes Lookup:

- App Store ID: `6770435744`
- Bundle ID: `com.litoarias.SetReady`
- Fallback URL: https://apps.apple.com/app/id6770435744

`assets/app-store.js` fetches Apple data at runtime and falls back to local values when the app is not public yet or lookup fails.

## EmailJS

The support form sends both `APP_NAME` and `app_name` with value:

`SetReady: Adaptive Rest Timer`

This keeps support communications separated by app in the shared EmailJS template.

## Build

```bash
node scripts/build.mjs
```
