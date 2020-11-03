TARGET_NAME=preview


deploy:
	firebase deploy --only hosting:$(TARGET_NAME)
