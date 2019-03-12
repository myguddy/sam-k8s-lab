(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{202:function(t,s,a){t.exports=a.p+"assets/img/2019-01-26-15-55-31.24aaa23f.png"},203:function(t,s,a){t.exports=a.p+"assets/img/2019-01-26-15-56-37.db7de2f3.png"},204:function(t,s,a){t.exports=a.p+"assets/img/2019-01-26-19-16-35.fe7a6260.png"},205:function(t,s,a){t.exports=a.p+"assets/img/2019-01-26-19-22-12.16529fd9.png"},236:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"step-03-rolling-update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-03-rolling-update","aria-hidden":"true"}},[this._v("#")]),this._v(" Step 03 Rolling Update")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("Production 운영환경에 배포하는 방법으로 설명. Master branch사용")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"rolling-update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rolling-update","aria-hidden":"true"}},[this._v("#")]),this._v(" Rolling update")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"deployment-수정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment-수정","aria-hidden":"true"}},[this._v("#")]),this._v(" Deployment 수정")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("spec.strategy.type: Rollingupdate  # 배포방식 설정")]),this._v(" "),s("li",[this._v("spec.strategy.rollingUpdate.maxSurge: 1  # Rolling 단위 설정")]),this._v(" "),s("li",[this._v("spec.strategy.rollingUpdate.maxUnavailable: 1 # down pod 최소 단위")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" spring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("boot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cicd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("demo\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" spring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("boot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cicd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("demo\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" spring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("boot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cicd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("demo\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strategy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" RollingUpdate\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rollingUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSurge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxUnavailable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v(".\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"pipeline-작성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pipeline-작성","aria-hidden":"true"}},[this._v("#")]),this._v(" Pipeline 작성")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("Pipeline 설정에서 Parameter 설정 : VERSION 처리를 위해 Pipeline에 변수 추가")]),t._v(" "),a("li",[t._v("General 영역에서 "),a("em",[t._v("이 빌드는 매개변수가 있습니다.")]),t._v(" 체크")]),t._v(" "),a("li",[t._v("매개변수 추가 Click > String Parameter\n"),a("ol",[a("li",[t._v("매개변수명 : VERSION")]),t._v(" "),a("li",[t._v("Default Value: develop")])])]),t._v(" "),a("li",[t._v("Pipeline 영역\n"),a("ol",[a("li",[t._v("Script Path : Production용 파일로 변경. jenkins-pipeline/rolling-pipeline")])])]),t._v(" "),a("li",[t._v("Git project의 jenkins-pipeline/rolling-pipeline 파일 편집")]),t._v(" "),a("li",[a("em",[t._v("VERSION")]),t._v(" 변수선언 주석 처리")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-groovy line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("// def VERSION = ‘develop’")]),this._v("\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"7"}},[s("li",[this._v("Job 설정의 Deploy 변경")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v(" yaml.update file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'k8s/deployment.yaml'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("'.spec.template.spec.containers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".image'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${HARBOR_REGISTRY}/${DOCKER_IMAGE}:${VERSION}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"소스변경"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#소스변경","aria-hidden":"true"}},[this._v("#")]),this._v(" 소스변경")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("Open file(./src/main/resource/static/css/style.css)")]),this._v(" "),s("li",[this._v("47 line의 색상 값 변경 (background-color: #157ed2; --\x3e background-color: red)")]),this._v(" "),s("li",[this._v("Stage & Commit")]),this._v(" "),s("li",[this._v("Push to origin/master(Git Server)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"rolling-update-실행"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rolling-update-실행","aria-hidden":"true"}},[this._v("#")]),this._v(" Rolling update 실행")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[n("p",[t._v("Click : "),n("em",[t._v("Build with Parameters")])])]),t._v(" "),n("li",[n("p",[n("em",[t._v("VERSION")]),t._v("  입력 : rolling-1")]),t._v(" "),n("p",[n("img",{attrs:{src:a(202),alt:""}})])]),t._v(" "),n("li",[n("p",[t._v("pod 상태 확인 : kubecrl get deploy -n edu01")]),t._v(" "),n("p",[n("img",{attrs:{src:a(203),alt:""}})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"rolling-rollback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rolling-rollback","aria-hidden":"true"}},[this._v("#")]),this._v(" Rolling rollback")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"pipeline-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pipeline-설정","aria-hidden":"true"}},[this._v("#")]),this._v(" Pipeline 설정")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("Script Path 수정 : jenkins-pipeline/rollback-pipeline")]),this._v(" "),s("p",[s("img",{attrs:{src:a(204),alt:""}})])]),this._v(" "),s("li",[s("p",[this._v("환경구성 & Volume은  Deploy 용만 작성")])]),this._v(" "),s("li",[s("p",[this._v("Deploy rollback 명령어 작성")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Library")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'retort-lib'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("_")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" label "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"jenkins-'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("UUID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomUUID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" ZCP_USERID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'edu01'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" K8S_NAMESPACE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'edu01'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" TYPE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deployment'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Rollback Resource Type: Deployment/Statefulset etc")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" DEPLOY_NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'spring-boot-cicd-demo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Name of resource")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("podTemplate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    serviceAccount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ＂zcp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sa"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ZCP_USERID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("＂"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    containers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Kubectl 수행을 위한 kubectl container 만 기동시킴")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("containerTemplate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kubectl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lachlanevenson/k8s-kubectl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ttyEnabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ROLLBACK'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("container")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kubectl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Rollback 수행")]),t._v("\n                kubeCmd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("rolloutUndo type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TYPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DEPLOY_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" namespace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" K8S_NAMESPACE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wait"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"rollback-실행"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rollback-실행","aria-hidden":"true"}},[this._v("#")]),this._v(" Rollback 실행")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(205),alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("Application의 변경된 내용 확인.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#step-03-rolling-update"}},[this._v("Step 03 Rolling Update")]),s("ul",[s("li",[s("a",{attrs:{href:"#rolling-update"}},[this._v("Rolling update")])]),s("li",[s("a",{attrs:{href:"#rolling-rollback"}},[this._v("Rolling rollback")])])])])])])}],e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("spring-boot-cicd-demo-dev-rolling 이름으로 Pipeline작성")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"./step02.html"}},[t._v("Step 02 Documentation 참조")])],1),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("spring-boot-cicd-demo-dev-rollback 이름으로 Pipeline작성")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"./step02.html"}},[t._v("Step 02 Documentation 참조")])],1),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),a("hr"),t._v(" "),a("p"),t._m(22),a("p")])},n,!1,null,null,null);s.default=r.exports}}]);