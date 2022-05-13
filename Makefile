APP_NAME=jparkkennaby-onboarding
# CIRCLE_SHA1 = default env var provided by circleci

install:
	npm install

# run:
# 	npm start

build:
	npm run build

test:
	npm run test

docker_login:
	docker login -u $(NAMESPACE) -p $(UW_DOCKER_PASS) $(REGISTRY)

docker_build:
	docker build -t $(REGISTRY)/$(NAMESPACE)/$(APP_NAME):$(CIRCLE_SHA1) .
	docker tag $(REGISTRY)/$(NAMESPACE)/$(APP_NAME):$(CIRCLE_SHA1) $(REGISTRY)/$(NAMESPACE)/$(APP_NAME):latest

docker_push:
	docker push $(REGISTRY)/$(NAMESPACE)/$(APP_NAME)

deploy:
	curl -X PATCH -k -d '{"spec":{"template":{"spec":{"containers":[{"name":"'$(APP_NAME)'","image":"docker.io/utilitywarehouse/$(APP_NAME):'$(CIRCLE_SHA1)'"}]}}}}' -H "Content-Type: application/strategic-merge-patch+json" -H "Authorization: Bearer $(K8S_DEV_TOKEN)" "https://elb.master.k8s.dev.uw.systems/apis/apps/v1/namespaces/$(NAMESPACE)/deployments/$(APP_NAME)"