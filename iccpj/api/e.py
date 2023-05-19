from oauth2client.service_account import ServiceAccountCredentials

# Replace with your own credentials and file path
SCOPE = ['https://www.googleapis.com/auth/spreadsheets']
CLIENT_SECRET_FILE = '"C:\Users\Ifzen\Downloads\apifetch-386016-dccbb82049c4.json"'

# Authenticate with Google API using the credentials
creds = ServiceAccountCredentials.from_json_keyfile_name(CLIENT_SECRET_FILE, SCOPE)
